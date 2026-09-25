const jwt = require("jsonwebtoken");
const User = require("../models/user");

// ==========================================
// AUTHENTICATION MIDDLEWARE
// ==========================================

const protect = async (req, res, next) => {
  try {

    // ==========================================
    // CHECK JWT SECRET
    // ==========================================

    if (!process.env.JWT_SECRET) {

      console.error(
        "JWT_SECRET is not configured in environment variables."
      );

      return res.status(500).json({
        success: false,
        message: "Server authentication configuration error.",
      });

    }


    // ==========================================
    // READ AUTHORIZATION HEADER
    // ==========================================

    const authHeader =
      req.headers.authorization;


    if (
      !authHeader ||
      !authHeader.startsWith("Bearer ")
    ) {

      return res.status(401).json({
        success: false,
        message: "Access denied. Please login first.",
      });

    }


    // ==========================================
    // EXTRACT TOKEN
    // ==========================================

    const token =
      authHeader
        .substring(7)
        .trim();


    if (!token) {

      return res.status(401).json({
        success: false,
        message: "Access denied. Authentication token is missing.",
      });

    }


    // ==========================================
    // VERIFY JWT
    // ==========================================

    const decoded =
      jwt.verify(
        token,
        process.env.JWT_SECRET
      );


    // ==========================================
    // VALIDATE TOKEN PAYLOAD
    // ==========================================

    if (
      !decoded ||
      !decoded.userId
    ) {

      return res.status(401).json({
        success: false,
        message: "Invalid authentication token.",
      });

    }


    // ==========================================
    // FIND USER
    // ==========================================

    const user =
      await User
        .findById(
          decoded.userId
        )
        .select("-password");


    if (!user) {

      return res.status(401).json({
        success: false,
        message: "User no longer exists.",
      });

    }


    // ==========================================
    // CHECK ACCOUNT STATUS
    // ==========================================

    if (
      user.isActive === false
    ) {

      return res.status(403).json({
        success: false,
        message: "Your account has been deactivated.",
      });

    }


    // ==========================================
    // ATTACH USER TO REQUEST
    // ==========================================

    req.user = user;


    // ==========================================
    // CONTINUE REQUEST
    // ==========================================

    next();

  }
  catch (error) {

    console.error(
      "Authentication error:",
      error.message
    );


    // ==========================================
    // INVALID / EXPIRED TOKEN
    // ==========================================

    if (
      error.name === "TokenExpiredError"
    ) {

      return res.status(401).json({
        success: false,
        message: "Session expired. Please login again.",
      });

    }


    if (
      error.name === "JsonWebTokenError" ||
      error.name === "NotBeforeError"
    ) {

      return res.status(401).json({
        success: false,
        message: "Invalid authentication token.",
      });

    }


    // ==========================================
    // OTHER AUTHENTICATION ERRORS
    // ==========================================

    return res.status(401).json({
      success: false,
      message: "Authentication failed. Please login again.",
    });

  }
};


// ==========================================
// EXPORT
// ==========================================

module.exports = protect;