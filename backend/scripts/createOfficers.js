require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/user");

const MONGO_URI = process.env.MONGODB_URI;

const officers = [
  {
    name: "Admin Officer",
    email: "admin@epanchayat.com",
    password: "Admin123456",
    phone: "9000000001",
    role: "admin",
  },
  {
    name: "GKM Officer",
    email: "gkm@epanchayat.com",
    password: "Gkm123456",
    phone: "9000000002",
    role: "gkm",
  },
  {
    name: "PDO Officer",
    email: "pdo@epanchayat.com",
    password: "Pdo123456",
    phone: "9000000003",
    role: "pdo",
  },
  {
    name: "EO Officer",
    email: "eo@epanchayat.com",
    password: "Eo123456",
    phone: "9000000004",
    role: "eo",
  },
  {
    name: "CEO Officer",
    email: "ceo@epanchayat.com",
    password: "Ceo123456",
    phone: "9000000005",
    role: "ceo",
  },
];

async function createOfficers() {
  try {
    await mongoose.connect(MONGO_URI);

    console.log("MongoDB connected");

    for (const officer of officers) {
      const existing = await User.findOne({
        email: officer.email,
      });

      if (existing) {
        console.log(
          `${officer.role} already exists: ${officer.email}`
        );
        continue;
      }

      await User.create({
        ...officer,
        state: "",
        district: "",
        taluk: "",
        village: "",
        isActive: true,
      });

      console.log(
        `Created ${officer.role}: ${officer.email}`
      );
    }

    console.log("Officer creation completed.");

    await mongoose.disconnect();
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}
createOfficers();