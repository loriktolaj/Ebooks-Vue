// import mongoose from "mongoose";
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    credits: {
        type: Number,
        default: 0
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin", "superadmin"]
      },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;