const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb://127.0.0.1:27017/Backend_test";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ Connection error:", error);
  }
};

module.exports = connectDB;
