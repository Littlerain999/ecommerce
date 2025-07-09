// models/User.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: async (value) => {
          let matched = await mongoose.models.User.findOne({ email: value });
          if (matched) {
            return false;
          }
        },
        message: "email already used",
      },
    },

    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the model
const User = mongoose.model("User", userSchema);
module.exports = User;
