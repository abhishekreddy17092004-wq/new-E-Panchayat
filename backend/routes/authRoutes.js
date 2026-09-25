const express = require("express");

const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// =========================================================
// PUBLIC AUTH ROUTES
// =========================================================

// Citizen registration
router.post(
  "/register",
  registerUser
);

// Citizen / Official login
router.post(
  "/login",
  loginUser
);

// =========================================================
// PROTECTED AUTH ROUTES
// =========================================================

// Get currently authenticated user
router.get(
  "/me",
  protect,
  getCurrentUser
);

module.exports = router;