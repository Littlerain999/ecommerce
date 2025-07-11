const { required } = require("joi");
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: async (value) => {
                const isMatched = await mongoose.models.User.findOne({ username: value });
                if (isMatched) return false
            },
            message: "username already in use"
        }
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
        enum: ["admin", "user"],
        default: "user"
    }
}, {
    timestamps: true
});

const User = model("User", userSchema);

module.exports = User;