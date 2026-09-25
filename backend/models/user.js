const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// ==========================================
// USER SCHEMA
// ==========================================

const userSchema = new mongoose.Schema(
  {
    // ==========================================
    // BASIC INFORMATION
    // ==========================================

    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 150,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      match: /^[6-9][0-9]{9}$/,
      maxlength: 10,
      minlength: 10,
    },

    // ==========================================
    // USER ROLE
    // ==========================================

    role: {
      type: String,
      enum: [
        "citizen",
        "admin",
        "gkm",
        "pdo",
        "eo",
        "ceo",
      ],
      default: "citizen",
      required: true,
      index: true,
    },

    // ==========================================
    // LOCATION
    // ==========================================

    state: {
      type: String,
      trim: true,
      default: "",
    },

    district: {
      type: String,
      trim: true,
      default: "",
    },

    taluk: {
      type: String,
      trim: true,
      default: "",
    },

    village: {
      type: String,
      trim: true,
      default: "",
    },

    // ==========================================
    // ACCOUNT STATUS
    // ==========================================

    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// ==========================================
// HASH PASSWORD BEFORE SAVE
// ==========================================

userSchema.pre("save", async function (next) {
  try {
    // Do not hash password again if it
    // was not modified.
    if (!this.isModified("password")) {
      return next();
    }

    const salt = await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(
      this.password,
      salt
    );

    next();
  } catch (error) {
    next(error);
  }
});

// ==========================================
// COMPARE PASSWORD
// ==========================================

userSchema.methods.comparePassword = async function (
  enteredPassword
) {
  if (!this.password) {
    return false;
  }

  return bcrypt.compare(
    enteredPassword,
    this.password
  );
};

// ==========================================
// CREATE MODEL SAFELY
// ==========================================

const User =
  mongoose.models.User ||
  mongoose.model("User", userSchema);

module.exports = User;