const Complaint = require("../models/complaint");
const User = require("../models/user");

const {
  sendSMS,
} = require("../services/smsService");

// =========================================================
// OFFICER WORKFLOW CONFIGURATION
// =========================================================

const OFFICER_WORKFLOW = {
  GKM: {
    role: "gkm",
    workingDays: 4,
    nextLevel: "PDO",
    nextRole: "pdo",
  },

  PDO: {
    role: "pdo",
    workingDays: 3,
    nextLevel: "EO",
    nextRole: "eo",
  },

  EO: {
    role: "eo",
    workingDays: 2,
    nextLevel: "CEO",
    nextRole: "ceo",
  },

  CEO: {
    role: "ceo",
    workingDays: null,
    nextLevel: null,
    nextRole: null,
  },
};

// =========================================================
// GENERATE UNIQUE COMPLAINT ID
// =========================================================

const generateComplaintId = () => {
  const year = new Date().getFullYear();

  const randomPart = Math.random()
    .toString(16)
    .substring(2, 10)
    .toUpperCase();

  return `EP-CMP-${year}-${randomPart}`;
};

// =========================================================
// ADD WORKING DAYS
// =========================================================
//
// Saturday and Sunday are not counted.
//
// Example:
// Friday + 1 working day = Monday
//
// =========================================================

const addWorkingDays = (startDate, workingDays) => {
  const date = new Date(startDate);

  let daysAdded = 0;

  while (daysAdded < workingDays) {
    date.setDate(date.getDate() + 1);

    const day = date.getDay();

    // Sunday = 0
    // Saturday = 6

    if (day !== 0 && day !== 6) {
      daysAdded++;
    }
  }

  return date;
};

// =========================================================
// FORMAT COMPLAINT
// =========================================================

const formatComplaint = (complaint) => {
  if (!complaint) {
    return null;
  }

  return complaint;
};

// =========================================================
// CREATE COMPLAINT
// =========================================================
//
// POST /api/complaints
//
// Citizen only.
//
// New complaint:
//
// Citizen
//    ↓
// Admin
//    ↓
// Pending verification
//
// =========================================================

const createComplaint = async (req, res) => {
  try {
    // =======================================================
    // AUTH CHECK
    // =======================================================

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required.",
      });
    }

    // =======================================================
    // CITIZEN CHECK
    // =======================================================

    if (req.user.role !== "citizen") {
      return res.status(403).json({
        success: false,
        message: "Only citizens can create complaints.",
      });
    }

    // =======================================================
    // GET REQUEST BODY
    // =======================================================

    const {
      state,
      district,
      taluk,
      village,
      problem,
      description,
      latitude,
      longitude,
    } = req.body;

    // =======================================================
    // REQUIRED FIELD VALIDATION
    // =======================================================

    if (
      !state ||
      !district ||
      !taluk ||
      !village ||
      !problem ||
      !description ||
      latitude === undefined ||
      longitude === undefined
    ) {
      return res.status(400).json({
        success: false,
        message:
          "State, district, taluk, village, problem, description, latitude and longitude are required.",
      });
    }

    // =======================================================
    // GPS VALIDATION
    // =======================================================

    const numericLatitude = Number(latitude);
    const numericLongitude = Number(longitude);

    if (
      !Number.isFinite(numericLatitude) ||
      !Number.isFinite(numericLongitude)
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Valid GPS latitude and longitude are required.",
      });
    }

    if (
      numericLatitude < -90 ||
      numericLatitude > 90 ||
      numericLongitude < -180 ||
      numericLongitude > 180
    ) {
      return res.status(400).json({
        success: false,
        message:
          "GPS coordinates are outside the valid range.",
      });
    }

    // =======================================================
    // PHOTO
    // =======================================================

    let photo = {
      originalName: "",
      fileName: "",
      filePath: "",
      fileType: "",
      fileSize: 0,
      url: "",
    };

    if (req.file) {
      photo = {
        originalName: req.file.originalname || "",
        fileName: req.file.filename || "",
        filePath: req.file.path || "",
        fileType: req.file.mimetype || "",
        fileSize: req.file.size || 0,

        url: `${req.protocol}://${req.get(
          "host"
        )}/uploads/complaints/${req.file.filename}`,
      };
    }

    // =======================================================
    // CREATE COMPLAINT
    // =======================================================

    const now = new Date();

    const complaint = await Complaint.create({
      citizen: req.user._id,

      state: String(state).trim(),
      district: String(district).trim(),
      taluk: String(taluk).trim(),
      village: String(village).trim(),

      problem,

      description: String(description).trim(),

      photo,

      location: {
        latitude: numericLatitude,
        longitude: numericLongitude,
      },

      complaintId: generateComplaintId(),

      // ===============================================
      // INITIAL STATUS
      // ===============================================

      status: "Submitted",

      // ===============================================
      // ADMIN VERIFICATION
      // ===============================================

      adminVerificationStatus: "Pending",

      verifiedBy: null,
      verifiedAt: null,
      rejectionReason: "",

      // ===============================================
      // INITIAL ASSIGNMENT
      // ===============================================

      assignedTo: null,

      currentLevel: "Admin",

      assignedAt: null,

      deadlineAt: null,

      // ===============================================
      // OTHER FIELDS
      // ===============================================

      remarks: "",

      escalationLevel: 0,

      lastActionAt: now,

      resolvedAt: null,

      closedAt: null,

      // ===============================================
      // HISTORY
      // ===============================================

      history: [
        {
          officer: null,

          role: null,

          level: "Admin",

          action: "Submitted",

          remarks:
            "Complaint submitted by citizen and is awaiting admin verification.",

          fromLevel: null,

          toLevel: "Admin",

          createdAt: now,
        },
      ],
    });

      // =======================================================
// COMPLAINT CONFIRMATION SMS
// =======================================================

try {

  const citizen =
    await User.findById(
      req.user._id
    ).select(
      "name phone"
    );

  if (
    citizen &&
    citizen.phone
  ) {

    const complaintSMS =
      await sendSMS(
        citizen.phone,
        `E-Gram Panchayat: Your complaint has been registered successfully. Complaint ID: ${complaint.complaintId}`
      );

    if (
      !complaintSMS.success
    ) {

      console.warn(
        "Complaint confirmation demo SMS could not be generated."
      );

    }

  }

}
catch (smsError) {

  console.warn(
    "Complaint was created successfully, but the confirmation SMS could not be generated:",
    smsError.message
  );

}

    // =======================================================
    // RESPONSE
    // =======================================================

    return res.status(201).json({
      success: true,

      message:
        "Complaint submitted successfully and is awaiting admin verification.",

      complaint: formatComplaint(complaint),
    });
  } catch (error) {
    console.error(
      "Create complaint error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to create complaint.",
    });
  }
};

// =========================================================
// GET MY COMPLAINTS
// =========================================================
//
// GET /api/complaints/my
//
// Citizen only.
//
// =========================================================

const getMyComplaints = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required.",
      });
    }

    const complaints = await Complaint.find({
      citizen: req.user._id,
    })
      .populate(
        "citizen",
        "name email phone role"
      )
      .populate(
        "assignedTo",
        "name email phone role"
      )
      .populate(
        "verifiedBy",
        "name email phone role"
      )
      .sort({
        createdAt: -1,
      });

    return res.status(200).json({
      success: true,
      count: complaints.length,
      complaints,
    });
  } catch (error) {
    console.error(
      "Get my complaints error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to retrieve complaints.",
    });
  }
};

// =========================================================
// GET ALL COMPLAINTS
// =========================================================
//
// GET /api/complaints
//
// Official roles only.
//
// =========================================================

const getAllComplaints = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required.",
      });
    }

    const officialRoles = [
      "admin",
      "gkm",
      "pdo",
      "eo",
      "ceo",
    ];

    const userRole = String(
      req.user.role || ""
    )
      .trim()
      .toLowerCase();

    if (!officialRoles.includes(userRole)) {
      return res.status(403).json({
        success: false,
        message:
          "Only authorized officials can access all complaints.",
      });
    }

    const complaints = await Complaint.find()
      .populate(
        "citizen",
        "name email phone role"
      )
      .populate(
        "assignedTo",
        "name email phone role"
      )
      .populate(
        "verifiedBy",
        "name email phone role"
      )
      .sort({
        createdAt: -1,
      });

    return res.status(200).json({
      success: true,
      count: complaints.length,
      complaints,
    });
  } catch (error) {
    console.error(
      "Get all complaints error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to retrieve complaints.",
    });
  }
};

// =========================================================
// GET ONE COMPLAINT
// =========================================================
//
// GET /api/complaints/:id
//
// Citizen:
//   Own complaint only.
//
// Officers:
//   Any complaint.
//
// =========================================================

const getComplaintById = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required.",
      });
    }

    const complaint = await Complaint.findOne({
      complaintId: req.params.id,
    })
      .populate(
        "citizen",
        "name email phone role"
      )
      .populate(
        "assignedTo",
        "name email phone role"
      )
      .populate(
        "verifiedBy",
        "name email phone role"
      );

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found.",
      });
    }

    // =======================================================
    // CITIZEN OWNERSHIP CHECK
    // =======================================================

    if (req.user.role === "citizen") {
      if (
        !complaint.citizen ||
        String(complaint.citizen._id) !==
          String(req.user._id)
      ) {
        return res.status(403).json({
          success: false,
          message:
            "You are not allowed to access this complaint.",
        });
      }
    }

    return res.status(200).json({
      success: true,
      complaint,
    });
  } catch (error) {
    console.error(
      "Get complaint error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to retrieve complaint.",
    });
  }
};

// =========================================================
// ADMIN VERIFY COMPLAINT
// =========================================================
//
// PUT /api/complaints/:id/verify
//
// ADMIN ONLY
//
// APPROVE:
//
// Admin
//   ↓
// GKM
//
// GKM gets:
// 4 working days
//
// REJECT:
//
// Complaint
//   ↓
// Rejected
//
// =========================================================

const verifyComplaint = async (req, res) => {
  try {
    // =======================================================
    // AUTH CHECK
    // =======================================================

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required.",
      });
    }

    // =======================================================
    // ADMIN CHECK
    // =======================================================

    if (req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message:
          "Only admin can verify complaints.",
      });
    }

    // =======================================================
    // REQUEST BODY
    // =======================================================

    const {
      decision,
      reason,
    } = req.body;

    const normalizedDecision = String(
      decision || ""
    )
      .trim()
      .toLowerCase();

    if (
      ![
        "approve",
        "reject",
      ].includes(normalizedDecision)
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Decision must be either approve or reject.",
      });
    }

    // =======================================================
    // FIND COMPLAINT
    // =======================================================

    const complaint = await Complaint.findOne({
      complaintId: req.params.id,
    });

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found.",
      });
    }

    // =======================================================
    // ONLY PENDING COMPLAINTS
    // =======================================================

    if (
      complaint.adminVerificationStatus !==
      "Pending"
    ) {
      return res.status(400).json({
        success: false,
        message:
          "This complaint has already been verified.",
      });
    }

    const now = new Date();

    // =======================================================
    // REJECT
    // =======================================================

    if (
      normalizedDecision === "reject"
    ) {
      if (
        !reason ||
        !String(reason).trim()
      ) {
        return res.status(400).json({
          success: false,
          message:
            "A rejection reason is required.",
        });
      }

      const rejectionReason =
        String(reason).trim();

      complaint.adminVerificationStatus =
        "Rejected";

      complaint.status =
        "Rejected";

      complaint.verifiedBy =
        req.user._id;

      complaint.verifiedAt =
        now;

      complaint.rejectionReason =
        rejectionReason;

      complaint.assignedTo =
        null;

      complaint.currentLevel =
        "Admin";

      complaint.assignedAt =
        null;

      complaint.deadlineAt =
        null;

      complaint.escalationLevel =
        0;

      complaint.lastActionAt =
        now;

      complaint.remarks =
        rejectionReason;

      complaint.history.push({
        officer:
          req.user._id,

        role:
          "admin",

        level:
          "Admin",

        action:
          "Rejected",

        remarks:
          rejectionReason,

        fromLevel:
          "Admin",

        toLevel:
          null,

        createdAt:
          now,
      });

      await complaint.save();

      return res.status(200).json({
        success: true,

        message:
          "Complaint rejected by admin.",

        complaint,
      });
    }

    // =======================================================
    // APPROVE
    // =======================================================
    //
    // ADMIN → GKM
    //
    // =======================================================

    // =======================================================
    // FIND ACTIVE GKM
    // =======================================================

    const gkmOfficer =
      await User.findOne({
        role: "gkm",
        isActive: true,
      }).select(
        "_id name email phone role"
      );

    if (!gkmOfficer) {
      return res.status(500).json({
        success: false,
        message:
          "No active GKM officer is available.",
      });
    }

    // =======================================================
    // CALCULATE GKM DEADLINE
    // =======================================================

    const deadline =
      addWorkingDays(
        now,
        OFFICER_WORKFLOW.GKM.workingDays
      );

    // =======================================================
    // UPDATE COMPLAINT
    // =======================================================

    complaint.adminVerificationStatus =
      "Approved";

    complaint.status =
      "Assigned";

    complaint.verifiedBy =
      req.user._id;

    complaint.verifiedAt =
      now;

    complaint.rejectionReason =
      "";

    // ===============================================
    // ASSIGN GKM
    // ===============================================

    complaint.currentLevel =
      "GKM";

    complaint.assignedTo =
      gkmOfficer._id;

    complaint.assignedAt =
      now;

    complaint.deadlineAt =
      deadline;

    complaint.escalationLevel =
      1;

    complaint.lastActionAt =
      now;

    complaint.resolvedAt =
      null;

    complaint.closedAt =
      null;

    complaint.remarks =
      "Complaint approved by admin and assigned to GKM.";

    // =======================================================
    // ADMIN APPROVAL HISTORY
    // =======================================================

    complaint.history.push({
      officer:
        req.user._id,

      role:
        "admin",

      level:
        "Admin",

      action:
        "Approved",

      remarks:
        `Complaint approved by admin and assigned to GKM officer ${gkmOfficer.name}.`,

      fromLevel:
        "Admin",

      toLevel:
        "GKM",

      createdAt:
        now,
    });

    // =======================================================
    // GKM ASSIGNMENT HISTORY
    // =======================================================

    complaint.history.push({
      officer:
        gkmOfficer._id,

      role:
        "gkm",

      level:
        "GKM",

      action:
        "Assigned",

      remarks:
        `Complaint assigned to GKM. Deadline: ${deadline.toISOString()}`,

      fromLevel:
        "Admin",

      toLevel:
        "GKM",

      createdAt:
        now,
    });

    // =======================================================
    // SAVE
    // =======================================================

    await complaint.save();

    // =======================================================
    // RESPONSE
    // =======================================================

    return res.status(200).json({
      success: true,

      message:
        "Complaint approved and assigned to GKM.",

      complaint,
    });
  } catch (error) {
    console.error(
      "Verify complaint error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to verify complaint.",
    });
  }
};

// =========================================================
// DELETE COMPLAINT
// =========================================================
//
// DELETE /api/complaints/:id
//
// ADMIN ONLY
//
// Admin can delete only complaints that are still
// waiting for admin verification.
//
// Intended for:
// - Silly complaints
// - Fake complaints
// - AI-modified / invalid complaints
//
// =========================================================

const deleteComplaint = async (req, res) => {
  try {
    // =======================================================
    // AUTH CHECK
    // =======================================================

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required.",
      });
    }

    // =======================================================
    // ADMIN CHECK
    // =======================================================

    if (req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message:
          "Only admin can delete complaints.",
      });
    }

    // =======================================================
    // FIND COMPLAINT
    // =======================================================

    const complaint =
      await Complaint.findOne({
        complaintId:
          req.params.id,
      });

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found.",
      });
    }

    // =======================================================
    // SAFETY
    // =======================================================
    //
    // Admin can delete only pending complaints.
    //
    // Once approved, complaint must continue through
    // the officer workflow and cannot be deleted by admin.
    //
    // =======================================================

    if (
      complaint.adminVerificationStatus !==
        "Pending" ||
      complaint.currentLevel !==
        "Admin"
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Only pending admin complaints can be deleted.",
      });
    }

    // =======================================================
    // DELETE
    // =======================================================

    await Complaint.deleteOne({
      _id:
        complaint._id,
    });

    return res.status(200).json({
      success: true,

      message:
        "Invalid complaint deleted by admin.",

      complaintId:
        complaint.complaintId,
    });
  } catch (error) {
    console.error(
      "Delete complaint error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to delete complaint.",
    });
  }
};

// =========================================================
// UPDATE OFFICER PROGRESS
// =========================================================
//
// PUT /api/complaints/:id/progress
//
// GKM / PDO / EO / CEO
//
// Body:
//
// {
//   "status": "In Progress",
//   "remarks": "Work started"
// }
//
// OR
//
// {
//   "status": "Resolved",
//   "remarks": "Problem solved"
// }
//
// =========================================================

const updateComplaintProgress =
  async (req, res) => {
    try {
      // =====================================================
      // AUTH CHECK
      // =====================================================

      if (!req.user) {
        return res.status(401).json({
          success: false,
          message:
            "Authentication required.",
        });
      }

      // =====================================================
      // ROLE → LEVEL
      // =====================================================

      const levelByRole = {
        gkm: "GKM",
        pdo: "PDO",
        eo: "EO",
        ceo: "CEO",
      };

      const officerLevel =
        levelByRole[
          String(
            req.user.role || ""
          )
            .trim()
            .toLowerCase()
        ];

      if (!officerLevel) {
        return res.status(403).json({
          success: false,
          message:
            "Only GKM, PDO, EO and CEO can update complaint progress.",
        });
      }

      // =====================================================
      // BODY
      // =====================================================

      const {
        status,
        remarks,
      } = req.body;

      const allowedStatuses = [
        "In Progress",
        "Resolved",
      ];

      if (
        !status ||
        !allowedStatuses.includes(
          status
        )
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Status must be In Progress or Resolved.",
        });
      }

      // =====================================================
      // FIND COMPLAINT
      // =====================================================

      const complaint =
        await Complaint.findOne({
          complaintId:
            req.params.id,
        });

      if (!complaint) {
        return res.status(404).json({
          success: false,
          message:
            "Complaint not found.",
        });
      }

      // =====================================================
      // MUST BE ADMIN APPROVED
      // =====================================================

      if (
        complaint.adminVerificationStatus !==
        "Approved"
      ) {
        return res.status(403).json({
          success: false,
          message:
            "This complaint has not been approved by admin.",
        });
      }

      // =====================================================
      // CURRENT LEVEL CHECK
      // =====================================================

      if (
        complaint.currentLevel !==
        officerLevel
      ) {
        return res.status(403).json({
          success: false,
          message:
            `This complaint is currently assigned to ${complaint.currentLevel}, not ${officerLevel}.`,
        });
      }

      // =====================================================
      // ASSIGNED OFFICER CHECK
      // =====================================================

      if (
        complaint.assignedTo &&
        String(
          complaint.assignedTo
        ) !==
          String(
            req.user._id
          )
      ) {
        return res.status(403).json({
          success: false,
          message:
            "This complaint is assigned to another officer.",
        });
      }

      // =====================================================
      // PREVENT WORK AFTER RESOLUTION
      // =====================================================

      if (
        complaint.status ===
          "Resolved" ||
        complaint.status ===
          "Closed"
      ) {
        return res.status(400).json({
          success: false,
          message:
            "This complaint has already been resolved or closed.",
        });
      }

      const now = new Date();

      // =====================================================
      // RESOLVE
      // =====================================================

      if (
        status ===
        "Resolved"
      ) {
        complaint.status =
          "Resolved";

        complaint.resolvedAt =
          now;

        complaint.closedAt =
          null;

        complaint.lastActionAt =
          now;

        if (
          remarks !==
          undefined
        ) {
          complaint.remarks =
            String(
              remarks
            ).trim();
        }

        // No further escalation after resolution.
        complaint.deadlineAt =
          null;

        complaint.history.push({
          officer:
            req.user._id,

          role:
            req.user.role,

          level:
            officerLevel,

          action:
            "Resolved",

          remarks:
            String(
              remarks ||
                "Complaint resolved."
            ).trim(),

          fromLevel:
            officerLevel,

          toLevel:
            null,

          createdAt:
            now,
        });

        await complaint.save();

        return res.status(200).json({
          success: true,

          message:
            `Complaint resolved by ${officerLevel}.`,

          complaint,
        });
      }

      // =====================================================
      // IN PROGRESS
      // =====================================================

      complaint.status =
        "In Progress";

      complaint.lastActionAt =
        now;

      if (
        remarks !==
        undefined
      ) {
        complaint.remarks =
          String(
            remarks
          ).trim();
      }

      complaint.history.push({
        officer:
          req.user._id,

        role:
          req.user.role,

        level:
          officerLevel,

        action:
          "In Progress",

        remarks:
          String(
            remarks ||
              "Work is in progress."
          ).trim(),

        fromLevel:
          officerLevel,

        toLevel:
          officerLevel,

        createdAt:
          now,
      });

      await complaint.save();

      return res.status(200).json({
        success: true,

        message:
          `Complaint marked In Progress by ${officerLevel}.`,

        complaint,
      });
    } catch (error) {
      console.error(
        "Update complaint progress error:",
        error
      );

      return res.status(500).json({
        success: false,
        message:
          "Failed to update complaint progress.",
      });
    }
  };
// =========================================================
// PUBLIC COMPLAINT STATISTICS
// =========================================================
//
// GET /api/complaints/stats
//
// Public homepage statistics:
//
// - Total complaints registered
// - Total complaints resolved
//
// No login required.
//
// =========================================================

const getComplaintStats = async (
    req,
    res
) => {

    try {

        const [
            registeredComplaints,
            resolvedComplaints
        ] = await Promise.all([

            Complaint.countDocuments({}),

            Complaint.countDocuments({
                status: "Resolved"
            })

        ]);


        return res.status(200).json({

            success: true,

            registered:
                registeredComplaints,

            resolved:
                resolvedComplaints

        });

    }
    catch (error) {

        console.error(
            "Complaint statistics error:",
            error
        );


        return res.status(500).json({

            success: false,

            message:
                "Unable to load complaint statistics."

        });

    }

};


// =========================================================
// EXPORT
// =========================================================

module.exports = {

    createComplaint,

    getMyComplaints,

    getComplaintById,

    getAllComplaints,

    verifyComplaint,

    deleteComplaint,

    updateComplaintProgress,

    getComplaintStats,


    // Exported for scheduler / other services if needed.

    OFFICER_WORKFLOW,

    addWorkingDays,

};