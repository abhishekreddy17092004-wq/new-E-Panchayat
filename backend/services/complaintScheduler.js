const cron = require("node-cron");

const {
  checkComplaintEscalations,
} = require("./complaintEscalationService");

// =========================================================
// COMPLAINT ESCALATION SCHEDULER
// =========================================================
//
// Checks complaints every hour.
//
// GKM → 4 working days
// PDO → 3 working days
// EO  → 2 working days
// CEO → final level
//
// =========================================================

const startComplaintScheduler = () => {
  console.log(
    "Complaint escalation scheduler started."
  );

  // =======================================================
  // RUN EVERY HOUR
  // =======================================================

  cron.schedule("0 * * * *", async () => {
    console.log(
      "Running complaint escalation check..."
    );

    await checkComplaintEscalations();
  });

  // =======================================================
  // OPTIONAL INITIAL CHECK
  // =======================================================
  //
  // Check once when server starts instead of waiting
  // for the next full hour.
  //
  // =======================================================

  checkComplaintEscalations().catch((error) => {
    console.error(
      "Initial complaint escalation check failed:",
      error
    );
  });
};


// =========================================================
// EXPORT
// =========================================================

module.exports = {
  startComplaintScheduler,
};