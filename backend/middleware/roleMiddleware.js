// ==========================================
// ROLE AUTHORIZATION MIDDLEWARE
// ==========================================

const authorizeRoles = (...allowedRoles) => {

  // ==========================================
  // NORMALIZE ALLOWED ROLES
  // ==========================================

  const normalizedRoles =
    allowedRoles
      .map((role) =>
        String(role || "")
          .trim()
          .toLowerCase()
      )
      .filter(Boolean);


  // ==========================================
  // RETURN MIDDLEWARE
  // ==========================================

  return (req, res, next) => {

    // ==========================================
    // AUTHENTICATION CHECK
    // ==========================================

    if (!req.user) {

      return res.status(401).json({
        success: false,
        message: "Authentication required.",
      });

    }


    // ==========================================
    // USER ROLE
    // ==========================================

    const userRole =
      String(
        req.user.role || ""
      )
        .trim()
        .toLowerCase();


    // ==========================================
    // ROLE CONFIGURATION CHECK
    // ==========================================

    if (!normalizedRoles.length) {

      console.error(
        "Role authorization middleware was called without allowed roles."
      );

      return res.status(500).json({
        success: false,
        message: "Server authorization configuration error.",
      });

    }


    // ==========================================
    // CHECK USER ROLE
    // ==========================================

    if (
      !normalizedRoles.includes(
        userRole
      )
    ) {

      return res.status(403).json({
        success: false,
        message:
          "Access denied. You do not have permission.",
      });

    }


    // ==========================================
    // AUTHORIZATION SUCCESS
    // ==========================================

    next();

  };

};


// ==========================================
// EXPORT
// ==========================================

module.exports = authorizeRoles;