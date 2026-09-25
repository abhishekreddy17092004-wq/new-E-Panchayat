const jwt = require("jsonwebtoken");
const User = require("../models/user");

const {
  sendSMS,
} = require("../services/smsService");

// ==========================================
// JWT CONFIGURATION CHECK
// ==========================================

const getJwtSecret = () => {

  const secret =
    process.env.JWT_SECRET;

  if (!secret) {

    throw new Error(
      "JWT_SECRET is not configured in .env"
    );

  }

  return secret;

};


// ==========================================
// GENERATE JWT
// ==========================================

const generateToken = (userId) => {

  return jwt.sign(
    {
      userId: String(userId),
    },
    getJwtSecret(),
    {
      expiresIn: "7d",
    }
  );

};


// ==========================================
// FORMAT USER RESPONSE
// ==========================================

const formatUser = (user) => {

  if (!user) {
    return null;
  }

  return {
    id: user._id,

    name:
      user.name || "",

    email:
      user.email || "",

    phone:
      user.phone || "",

    role:
      user.role || "citizen",

    state:
      user.state || "",

    district:
      user.district || "",

    taluk:
      user.taluk || "",

    village:
      user.village || "",
  };

};


// ==========================================
// REGISTER CITIZEN
// ==========================================

const registerUser = async (
  req,
  res
) => {

  try {

    const {
      name,
      email,
      password,
      phone,
      state,
      district,
      taluk,
      village,
    } = req.body;


    // ========================================
    // REQUIRED FIELDS
    // ========================================

    if (
      !name ||
      !email ||
      !password ||
      !phone
    ) {

      return res.status(400).json({
        success: false,
        message:
          "Name, email, password and phone are required.",
      });

    }


    // ========================================
    // CLEAN INPUT
    // ========================================

    const normalizedName =
      String(name).trim();

    const normalizedEmail =
      String(email)
        .trim()
        .toLowerCase();

    const normalizedPhone =
  String(phone)
    .replace(/\D/g, "")
    .slice(0, 10);

    if (
  !/^[6-9][0-9]{9}$/.test(
    normalizedPhone
  )
) {

  return res.status(400).json({
    success: false,
    message:
      "Please enter a valid 10-digit Indian mobile number.",
  });

}

    // ========================================
    // BASIC VALIDATION
    // ========================================

    if (!normalizedName) {

      return res.status(400).json({
        success: false,
        message: "Name cannot be empty.",
      });

    }


    if (!normalizedEmail) {

      return res.status(400).json({
        success: false,
        message: "Email cannot be empty.",
      });

    }


    if (!normalizedPhone) {

      return res.status(400).json({
        success: false,
        message: "Phone cannot be empty.",
      });

    }


    if (
      String(password).length < 6
    ) {

      return res.status(400).json({
        success: false,
        message:
          "Password must be at least 6 characters long.",
      });

    }


    // ========================================
    // CHECK EXISTING EMAIL
    // ========================================

    const existingUser =
      await User.findOne({
        email:
          normalizedEmail,
      });


    if (existingUser) {

      return res.status(409).json({
        success: false,
        message:
          "User with this email already exists.",
      });

    }


    // ========================================
    // CREATE CITIZEN
    // ========================================
    //
    // IMPORTANT:
    // Public registration can NEVER choose
    // an official role.
    //
    // Every public registration creates:
    //
    // role = citizen
    //
    // ========================================

    const user =
      await User.create({

        name:
          normalizedName,

        email:
          normalizedEmail,

        password:
          String(password),

        phone:
          normalizedPhone,

        role:
          "citizen",

        state:
          String(state || "").trim(),

        district:
          String(district || "").trim(),

        taluk:
          String(taluk || "").trim(),

        village:
          String(village || "").trim(),

        isActive:
          true,

      });


      // ========================================
// REGISTRATION CONFIRMATION SMS
// ========================================

const registrationSMS =
  await sendSMS(
    user.phone,
    `Welcome to E-Gram Panchayat, ${user.name}. Your citizen registration was successful.`
  );

if (!registrationSMS.success) {

  console.warn(
    "Registration demo SMS could not be generated."
  );

}

    // ========================================
    // GENERATE JWT
    // ========================================

    const token =
      generateToken(
        user._id
      );


    // ========================================
    // RESPONSE
    // ========================================

    return res.status(201).json({

      success: true,

      message:
        "Citizen registered successfully.",

      token,

      user:
        formatUser(user),

    });

  }
  catch (error) {

    console.error(
      "Register error:",
      error
    );


    // ========================================
    // DUPLICATE EMAIL
    // ========================================

    if (
      error &&
      error.code === 11000
    ) {

      return res.status(409).json({
        success: false,
        message:
          "User with this email already exists.",
      });

    }


    // ========================================
    // VALIDATION ERROR
    // ========================================

    if (
      error &&
      error.name ===
        "ValidationError"
    ) {

      return res.status(400).json({
        success: false,
        message:
          "Invalid registration information.",
      });

    }


    // ========================================
    // SERVER ERROR
    // ========================================

    return res.status(500).json({
      success: false,
      message:
        "Registration failed.",
    });

  }

};


// ==========================================
// LOGIN USER
// ==========================================

const loginUser = async (
  req,
  res
) => {

  try {

    const {
      email,
      password,
    } = req.body;


    // ========================================
    // REQUIRED FIELDS
    // ========================================

    if (
      !email ||
      !password
    ) {

      return res.status(400).json({
        success: false,
        message:
          "Email and password are required.",
      });

    }


    // ========================================
    // NORMALIZE EMAIL
    // ========================================

    const normalizedEmail =
      String(email)
        .trim()
        .toLowerCase();


    // ========================================
    // FIND USER
    // ========================================

    const user =
      await User.findOne({
        email:
          normalizedEmail,
      }).select(
        "+password"
      );


    // ========================================
    // INVALID LOGIN
    // ========================================

    if (!user) {

      return res.status(401).json({
        success: false,
        message:
          "Invalid email or password.",
      });

    }


    // ========================================
    // ACCOUNT STATUS
    // ========================================

    if (
      user.isActive === false
    ) {

      return res.status(403).json({
        success: false,
        message:
          "Your account has been disabled.",
      });

    }


    // ========================================
    // PASSWORD CHECK
    // ========================================

    const isPasswordCorrect =
      await user.comparePassword(
        String(password)
      );


    if (!isPasswordCorrect) {

      return res.status(401).json({
        success: false,
        message:
          "Invalid email or password.",
      });

    }


    // ========================================
    // GENERATE JWT
    // ========================================

    const token =
      generateToken(
        user._id
      );


    // ========================================
    // RESPONSE
    // ========================================

    return res.status(200).json({

      success: true,

      message:
        "Login successful.",

      token,

      user:
        formatUser(user),

    });

  }
  catch (error) {

    console.error(
      "Login error:",
      error
    );


    return res.status(500).json({
      success: false,
      message:
        "Login failed.",
    });

  }

};


// ==========================================
// GET CURRENT USER
// ==========================================
//
// Used by frontend:
//
// GET /api/auth/me
//
// Requires:
// Authorization: Bearer <JWT>
//
// ==========================================

const getCurrentUser = async (
  req,
  res
) => {

  try {

    if (!req.user) {

      return res.status(401).json({
        success: false,
        message:
          "Authentication required.",
      });

    }


    return res.status(200).json({

      success: true,

      user:
        formatUser(
          req.user
        ),

    });

  }
  catch (error) {

    console.error(
      "Get current user error:",
      error
    );


    return res.status(500).json({
      success: false,
      message:
        "Unable to retrieve user information.",
    });

  }

};


// ==========================================
// EXPORT
// ==========================================

module.exports = {

  registerUser,

  loginUser,

  getCurrentUser,

};