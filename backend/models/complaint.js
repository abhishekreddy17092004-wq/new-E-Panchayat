const mongoose = require("mongoose");

// ==========================================
// COMPLAINT SCHEMA
// ==========================================

const complaintSchema = new mongoose.Schema(
  {
    // ==========================================
    // CITIZEN
    // ==========================================

    citizen: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    // ==========================================
    // LOCATION
    // ==========================================

    state: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    district: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    taluk: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    village: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    // ==========================================
    // PROBLEM CATEGORY
    // ==========================================

    problem: {
      type: String,
      required: true,
      enum: [
        "Road Damage",
        "Electricity Problem",
        "Water Problem",
        "Government Property Problem",
        "Government Scheme Problem",
        "Drainage Problem",
        "Street Light Problem",
        "Garbage / Sanitation Problem",
        "Other",
      ],
      trim: true,
    },

    // ==========================================
    // DESCRIPTION
    // ==========================================

    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000,
    },

    // ==========================================
    // PHOTO
    // ==========================================

    photo: {
      originalName: {
        type: String,
        default: "",
        trim: true,
      },

      fileName: {
        type: String,
        default: "",
        trim: true,
      },

      filePath: {
        type: String,
        default: "",
        trim: true,
      },

      fileType: {
        type: String,
        default: "",
        trim: true,
      },

      fileSize: {
        type: Number,
        default: 0,
        min: 0,
      },

      url: {
        type: String,
        default: "",
        trim: true,
      },
    },

    // ==========================================
    // GPS LOCATION
    // ==========================================

    location: {
      latitude: {
        type: Number,
        required: true,
        min: -90,
        max: 90,
      },

      longitude: {
        type: Number,
        required: true,
        min: -180,
        max: 180,
      },
    },

    // ==========================================
    // UNIQUE COMPLAINT ID
    // ==========================================

    complaintId: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },

    // ==========================================
    // COMPLAINT STATUS
    // ==========================================

    status: {
      type: String,

      enum: [
        "Submitted",
        "Under Review",
        "Assigned",
        "In Progress",
        "Resolved",
        "Rejected",
        "Closed",
      ],

      default: "Submitted",

      index: true,
    },

    // ==========================================
    // ADMIN VERIFICATION
    // ==========================================

    adminVerificationStatus: {
      type: String,

      enum: [
        "Pending",
        "Approved",
        "Rejected",
      ],

      default: "Pending",

      index: true,
    },

    // ==========================================
    // ADMIN WHO VERIFIED
    // ==========================================

    verifiedBy: {
      type: mongoose.Schema.Types.ObjectId,

      ref: "User",

      default: null,
    },

    // ==========================================
    // ADMIN VERIFICATION TIME
    // ==========================================

    verifiedAt: {
      type: Date,

      default: null,
    },

    // ==========================================
    // ADMIN REJECTION REASON
    // ==========================================

    rejectionReason: {
      type: String,

      default: "",

      trim: true,

      maxlength: 2000,
    },

    // ==========================================
    // CURRENT OFFICIAL
    // ==========================================

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,

      ref: "User",

      default: null,

      index: true,
    },

    // ==========================================
    // CURRENT OFFICER LEVEL
    // ==========================================

    currentLevel: {
      type: String,

      enum: [
        "Admin",
        "GKM",
        "PDO",
        "EO",
        "CEO",
      ],

      default: "Admin",

      index: true,
    },

    // ==========================================
    // ASSIGNMENT TIME
    // ==========================================

    assignedAt: {
      type: Date,

      default: null,

      index: true,
    },

    // ==========================================
    // OFFICER DEADLINE
    // ==========================================

    deadlineAt: {
      type: Date,

      default: null,

      index: true,
    },

    // ==========================================
    // OFFICER REMARKS
    // ==========================================

    remarks: {
      type: String,

      default: "",

      trim: true,

      maxlength: 2000,
    },

    // ==========================================
    // ESCALATION LEVEL
    // ==========================================

    escalationLevel: {
      type: Number,

      default: 0,

      min: 0,

      max: 4,

      index: true,
    },

    // ==========================================
    // LAST ACTION
    // ==========================================

    lastActionAt: {
      type: Date,

      default: null,

      index: true,
    },

    // ==========================================
    // RESOLUTION
    // ==========================================

    resolvedAt: {
      type: Date,

      default: null,
    },

    // ==========================================
    // CLOSED
    // ==========================================

    closedAt: {
      type: Date,

      default: null,
    },

    // ==========================================
    // OFFICER ACTION HISTORY
    // ==========================================

    history: [
      {
        // ========================================
        // OFFICER
        // ========================================

        officer: {
          type: mongoose.Schema.Types.ObjectId,

          ref: "User",

          default: null,
        },

        // ========================================
        // OFFICER ROLE
        // ========================================

        role: {
          type: String,

          enum: [
            "admin",
            "gkm",
            "pdo",
            "eo",
            "ceo",
          ],

          default: null,
        },

        // ========================================
        // OFFICER LEVEL
        // ========================================

        level: {
          type: String,

          enum: [
            "Admin",
            "GKM",
            "PDO",
            "EO",
            "CEO",
          ],

          default: null,
        },

        // ========================================
        // ACTION
        // ========================================

        action: {
          type: String,

          enum: [
            "Submitted",
            "Approved",
            "Rejected",
            "Assigned",
            "Started",
            "In Progress",
            "Escalated",
            "Resolved",
            "Closed",
          ],

          required: true,
        },

        // ========================================
        // REMARKS
        // ========================================

        remarks: {
          type: String,

          default: "",

          trim: true,

          maxlength: 2000,
        },

        // ========================================
        // PREVIOUS LEVEL
        // ========================================

        fromLevel: {
          type: String,

          enum: [
            "Admin",
            "GKM",
            "PDO",
            "EO",
            "CEO",
            null,
          ],

          default: null,
        },

        // ========================================
        // NEW LEVEL
        // ========================================

        toLevel: {
          type: String,

          enum: [
            "Admin",
            "GKM",
            "PDO",
            "EO",
            "CEO",
            null,
          ],

          default: null,
        },

        // ========================================
        // ACTION TIME
        // ========================================

        createdAt: {
          type: Date,

          default: Date.now,
        },
      },
    ],
  },

  {
    timestamps: true,
  }
);


// ==========================================
// CREATE MODEL SAFELY
// ==========================================

const Complaint =
  mongoose.models.Complaint ||
  mongoose.model(
    "Complaint",
    complaintSchema
  );


// ==========================================
// EXPORT
// ==========================================

module.exports = Complaint;