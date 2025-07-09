const { required } = require("joi");
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: async (value) => {
                const isMatched = await mongoose.models.User.findOne({ email: value });
                if (isMatched) return false
            },
            message: "email already in use"
        }
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        enum: ["Admin", "User"],
        default: "User"
    }
}, {
    timestamps: true
});

const User = model("User", userSchema);

module.exports = User;