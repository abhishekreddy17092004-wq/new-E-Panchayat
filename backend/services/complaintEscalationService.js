const Complaint = require("../models/complaint");
const User = require("../models/user");

// =========================================================
// OFFICER WORKFLOW
// =========================================================
//
// Admin approves
//      ↓
// GKM → 4 working days
//      ↓
// PDO → 3 working days
//      ↓
// EO  → 2 working days
//      ↓
// CEO → Final officer
//
// Saturday and Sunday are not counted.
//
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
// ADD WORKING DAYS
// =========================================================
//
// Adds only Monday-Friday.
//
// Example:
//
// Monday + 1 working day = Tuesday
// Friday + 1 working day = Monday
//
// =========================================================

const addWorkingDays = (
  startDate,
  workingDays
) => {

  const date =
    new Date(startDate);


  if (
    Number.isNaN(
      date.getTime()
    )
  ) {

    throw new Error(
      "Invalid start date."
    );
  }


  if (
    workingDays === null ||
    workingDays === undefined ||
    workingDays <= 0
  ) {

    return date;
  }


  let daysAdded = 0;


  while (
    daysAdded < workingDays
  ) {

    date.setDate(
      date.getDate() + 1
    );


    const day =
      date.getDay();


    // Sunday = 0
    // Saturday = 6

    if (
      day !== 0 &&
      day !== 6
    ) {

      daysAdded++;
    }
  }


  return date;
};


// =========================================================
// GET NEXT ACTIVE OFFICER
// =========================================================

const getNextOfficer =
  async (nextRole) => {

    if (!nextRole) {
      return null;
    }


    const officer =
      await User.findOne({
        role: nextRole,
        isActive: true,
      });


    return officer;
  };


// =========================================================
// ESCALATE ONE COMPLAINT
// =========================================================

const escalateComplaint =
  async (complaint) => {

    try {

      if (!complaint) {

        console.error(
          "Cannot escalate: complaint is missing."
        );

        return false;
      }


      const currentLevel =
        complaint.currentLevel;


      const workflow =
        OFFICER_WORKFLOW[
          currentLevel
        ];


      // =====================================================
      // INVALID LEVEL
      // =====================================================

      if (!workflow) {

        console.error(
          `Unknown complaint level: ${currentLevel}`
        );

        return false;
      }


      // =====================================================
      // CEO IS FINAL LEVEL
      // =====================================================

      if (
        !workflow.nextLevel
      ) {

        console.log(
          `Complaint ${complaint.complaintId} is already at CEO.`
        );

        return false;
      }


      // =====================================================
      // FIND NEXT ACTIVE OFFICER
      // =====================================================

      const nextOfficer =
        await getNextOfficer(
          workflow.nextRole
        );


      if (!nextOfficer) {

        console.error(
          `No active ${workflow.nextRole} officer found for complaint ${complaint.complaintId}.`
        );

        return false;
      }


      // =====================================================
      // LEVEL INFORMATION
      // =====================================================

      const previousLevel =
        currentLevel;


      const nextLevel =
        workflow.nextLevel;


      const nextWorkflow =
        OFFICER_WORKFLOW[
          nextLevel
        ];


      const assignmentDate =
        new Date();


      // =====================================================
      // PREVIOUS ASSIGNMENT
      // =====================================================

      const previousOfficer =
        complaint.assignedTo || null;


      // =====================================================
      // UPDATE COMPLAINT LEVEL
      // =====================================================

      complaint.currentLevel =
        nextLevel;


      complaint.assignedTo =
        nextOfficer._id;


      complaint.status =
        "Assigned";


      complaint.lastActionAt =
        assignmentDate;


      complaint.assignedAt =
        assignmentDate;


      // =====================================================
      // ESCALATION LEVEL
      // =====================================================

      complaint.escalationLevel =
        Math.min(
          Number(
            complaint.escalationLevel || 0
          ) + 1,
          4
        );


      // =====================================================
      // SET NEXT DEADLINE
      // =====================================================

      if (
        nextWorkflow &&
        nextWorkflow.workingDays !== null
      ) {

        complaint.deadlineAt =
          addWorkingDays(
            assignmentDate,
            nextWorkflow.workingDays
          );

      } else {

        // CEO is the final level.

        complaint.deadlineAt =
          null;
      }


      // =====================================================
      // AUTOMATIC ESCALATION REMARK
      // =====================================================

      const escalationRemark =
        `Complaint automatically escalated from ${previousLevel} to ${nextLevel}.`;


      complaint.remarks =
        escalationRemark;


      // =====================================================
      // HISTORY ENTRY
      // =====================================================
      //
      // Every automatic transfer must be recorded.
      //
      // Example:
      //
      // GKM → PDO
      //
      // action = Escalated
      // fromLevel = GKM
      // toLevel = PDO
      //
      // =====================================================

      if (
        !Array.isArray(
          complaint.history
        )
      ) {

        complaint.history = [];
      }


      complaint.history.push({

        officer:
          nextOfficer._id,

        role:
          nextOfficer.role,

        level:
          nextLevel,

        action:
          "Escalated",

        remarks:
          escalationRemark,

        fromLevel:
          previousLevel,

        toLevel:
          nextLevel,

        createdAt:
          assignmentDate,
      });


      // =====================================================
      // SAVE
      // =====================================================

      await complaint.save();


      console.log(
        `Complaint ${complaint.complaintId} automatically escalated from ${previousLevel} to ${nextLevel}.`
      );


      console.log(
        `New officer: ${nextOfficer.email || nextOfficer._id}`
      );


      if (
        complaint.deadlineAt
      ) {

        console.log(
          `New deadline: ${complaint.deadlineAt.toISOString()}`
        );
      }


      return true;


    } catch (error) {

      console.error(
        `Failed to escalate complaint ${
          complaint?.complaintId || "unknown"
        }:`,
        error
      );


      return false;
    }
  };


// =========================================================
// CHECK COMPLAINTS FOR AUTOMATIC ESCALATION
// =========================================================

const checkComplaintEscalations =
  async () => {

    try {

      // =======================================================
      // FIND ACTIVE OFFICER COMPLAINTS
      // =======================================================

      const complaints =
        await Complaint.find({

          status: {
            $in: [
              "Assigned",
              "Under Review",
              "In Progress",
            ],
          },

          currentLevel: {
            $in: [
              "GKM",
              "PDO",
              "EO",
            ],
          },

        });


      console.log(
        `Escalation check: ${complaints.length} active complaint(s) found.`
      );


      // =======================================================
      // CHECK EACH COMPLAINT
      // =======================================================

      for (
        const complaint of complaints
      ) {

        try {

          const currentLevel =
            complaint.currentLevel;


          const workflow =
            OFFICER_WORKFLOW[
              currentLevel
            ];


          if (!workflow) {

            console.warn(
              `Skipping complaint ${complaint.complaintId}: unknown level ${currentLevel}.`
            );

            continue;
          }


          // Safety check.

          if (
            workflow.workingDays === null
          ) {

            continue;
          }


          // =====================================================
          // DETERMINE DEADLINE
          // =====================================================

          let deadline =
            complaint.deadlineAt
              ? new Date(
                  complaint.deadlineAt
                )
              : null;


          // =====================================================
          // BACKWARD COMPATIBILITY
          // =====================================================
          //
          // Older complaints may not have deadlineAt.
          //
          // Calculate it using:
          //
          // assignedAt
          // lastActionAt
          // createdAt
          //
          // =====================================================

          if (
            !deadline ||
            Number.isNaN(
              deadline.getTime()
            )
          ) {

            const assignmentDate =
              complaint.assignedAt ||
              complaint.lastActionAt ||
              complaint.createdAt;


            if (!assignmentDate) {

              console.error(
                `Complaint ${complaint.complaintId} has no valid assignment date.`
              );

              continue;
            }


            deadline =
              addWorkingDays(
                assignmentDate,
                workflow.workingDays
              );
          }


          // =====================================================
          // CHECK DEADLINE
          // =====================================================

          const now =
            new Date();


          if (
            now >= deadline
          ) {

            console.log(
              `Deadline reached for complaint ${complaint.complaintId}.`
            );


            await escalateComplaint(
              complaint
            );
          }

        } catch (complaintError) {

          console.error(
            `Error checking complaint ${
              complaint?.complaintId || "unknown"
            }:`,
            complaintError
          );
        }
      }


    } catch (error) {

      console.error(
        "Complaint escalation check error:",
        error
      );
    }
  };


// =========================================================
// EXPORT
// =========================================================

module.exports = {

  OFFICER_WORKFLOW,

  addWorkingDays,

  getNextOfficer,

  escalateComplaint,

  checkComplaintEscalations,

};