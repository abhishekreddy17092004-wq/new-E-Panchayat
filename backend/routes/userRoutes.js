const express = require("express");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// =========================================================
// GET LOGGED-IN USER PROFILE
// GET /api/users/profile
// =========================================================

router.get("/profile", protect, (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Authentication required.",
    });
  }

  return res.status(200).json({
    success: true,
    message: "User profile retrieved successfully",

    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      phone: req.user.phone,

      role: req.user.role,

      state: req.user.state || "",
      district: req.user.district || "",
      taluk: req.user.taluk || "",
      village: req.user.village || "",

      isActive: req.user.isActive,

      createdAt: req.user.createdAt,
      updatedAt: req.user.updatedAt,
    },
  });
});

// =========================================================
// EXPORT ROUTER
// =========================================================

module.exports = router;