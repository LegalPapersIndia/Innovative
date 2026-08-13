import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Admin from "./models/Admin.js";

dotenv.config();
connectDB();

const seedAdmin = async () => {
  try {
    const existingAdmin = await Admin.findOne({
      email: "admin@innovativenaturepicks.com",
    });

    if (existingAdmin) {
      console.log("Admin already exists. Skipping seed.");
      process.exit();
    }

    const admin = await Admin.create({
      name: "Abhishek",
      email: "admin@innovativenaturepicks.com",
      password: "admin@123", // change before running, or update after
    });

    console.log("Admin created successfully:", admin.email);
    process.exit();
  } catch (error) {
    console.error("Error seeding admin:", error.message);
    process.exit(1);
  }
};

seedAdmin();