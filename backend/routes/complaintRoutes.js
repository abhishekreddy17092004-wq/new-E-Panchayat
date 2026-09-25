const express = require("express");

const router = express.Router();


// =========================================================
// CONTROLLERS
// =========================================================

const {
    createComplaint,
    getMyComplaints,
    getComplaintById,
    getAllComplaints,

    // Admin
    verifyComplaint,
    deleteComplaint,

    // Officers
    updateComplaintProgress,

    // Public statistics
    getComplaintStats

} = require("../controllers/complaintController");


// =========================================================
// MIDDLEWARE
// =========================================================

const protect =
    require("../middleware/authMiddleware");

const authorizeRoles =
    require("../middleware/roleMiddleware");

const complaintUpload =
    require("../middleware/complaintUploadMiddleware");


// =========================================================
// OFFICER ROLES
// =========================================================

const officerRoles = [
    "admin",
    "gkm",
    "pdo",
    "eo",
    "ceo"
];


// =========================================================
// CITIZEN
// SUBMIT COMPLAINT
// =========================================================
//
// POST /api/complaints
//
// Only authenticated citizens can submit complaints.
//
// =========================================================

router.post(
    "/",
    protect,
    authorizeRoles("citizen"),
    complaintUpload.single("photo"),
    createComplaint
);


// =========================================================
// CITIZEN
// GET MY COMPLAINTS
// =========================================================
//
// GET /api/complaints/my
//
// Returns complaints belonging to the logged-in citizen.
//
// =========================================================

router.get(
    "/my",
    protect,
    authorizeRoles("citizen"),
    getMyComplaints
);


// =========================================================
// OFFICERS
// GET ALL COMPLAINTS
// =========================================================
//
// GET /api/complaints
//
// Accessible to:
//
// admin
// gkm
// pdo
// eo
// ceo
//
// =========================================================

router.get(
    "/",
    protect,
    authorizeRoles(...officerRoles),
    getAllComplaints
);


// =========================================================
// ADMIN
// VERIFY COMPLAINT
// =========================================================
//
// PUT /api/complaints/:id/verify
//
// Only admin can perform verification.
//
// =========================================================

router.put(
    "/:id/verify",
    protect,
    authorizeRoles("admin"),
    verifyComplaint
);


// =========================================================
// ADMIN
// DELETE INVALID COMPLAINT
// =========================================================
//
// DELETE /api/complaints/:id
//
// Only admin can delete complaints.
//
// =========================================================

router.delete(
    "/:id",
    protect,
    authorizeRoles("admin"),
    deleteComplaint
);


// =========================================================
// OFFICER
// UPDATE COMPLAINT PROGRESS
// =========================================================
//
// PUT /api/complaints/:id/progress
//
// Officers:
//
// GKM -> works on GKM complaints
// PDO -> works on PDO complaints
// EO  -> works on EO complaints
// CEO -> works on CEO complaints
//
// =========================================================

router.put(
    "/:id/progress",
    protect,
    authorizeRoles(
        "gkm",
        "pdo",
        "eo",
        "ceo"
    ),
    updateComplaintProgress
);


// =========================================================
// PUBLIC COMPLAINT STATISTICS
// =========================================================
//
// GET /api/complaints/stats
//
// Used by the public homepage statistics.
//
// NO authentication required.
//
// IMPORTANT:
// This route MUST come before "/:id"
// so "stats" is not treated as a complaint ID.
//
// =========================================================

router.get(
    "/stats",
    getComplaintStats
);


// =========================================================
// GET ONE COMPLAINT
// =========================================================
//
// GET /api/complaints/:id
//
// Citizen:
//     Can access only their own complaint.
//
// Officers:
//     Can access complaints according to controller rules.
//
// =========================================================

router.get(
    "/:id",
    protect,
    authorizeRoles(
        "citizen",
        ...officerRoles
    ),
    getComplaintById
);

// =========================================================
// PUBLIC COMPLAINT TRACKING
// =========================================================
//
// GET /api/complaints/track/:complaintId
//
// Public tracking endpoint.
//
// No email.
// No password.
// No citizen login.
//
// Only the Complaint ID is required.
//
// IMPORTANT:
// This route MUST come before "/:id"
// so "track" is not treated as a complaint ID.
//
// =========================================================

router.get(
    "/track/:complaintId",
    async (req, res) => {

        try {

            const complaintId =
                String(
                    req.params.complaintId || ""
                ).trim();


            if (!complaintId) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Complaint ID is required."

                });

            }


            /*
             * Use the same Complaint model/controller
             * data source already used by the application.
             *
             * We intentionally do NOT expose the
             * authenticated GET /:id endpoint here.
             */

           const Complaint =
    require("../models/complaint");


            const complaint =
                await Complaint.findOne({
                    complaintId: complaintId
                }).lean();


            if (!complaint) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Complaint not found."

                });

            }


            /*
             * Return ONLY information needed
             * for public complaint tracking.
             *
             * Do not expose citizen email,
             * phone, password or other
             * private account information.
             */

            return res.status(200).json({

                success: true,

                complaint: {

                    complaintId:
                        complaint.complaintId,

                    problem:
                        complaint.problem,

                    description:
                        complaint.description,

                    status:
                        complaint.status,

                    currentLevel:
                        complaint.currentLevel ||
                        complaint.assignedLevel ||
                        null,

                    createdAt:
                        complaint.createdAt,

                    updatedAt:
                        complaint.updatedAt,

                    progress:
                        complaint.progress ||
                        complaint.history ||
                        []

                }

            });

        }
        catch (error) {

            console.error(
                "PUBLIC COMPLAINT TRACKING ERROR:",
                error
            );


            return res.status(500).json({

                success: false,

                message:
                    "Unable to track complaint."

            });

        }

    }
);


// =========================================================
// EXPORT ROUTER
// =========================================================

module.exports = router;