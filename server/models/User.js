import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    credits: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const User = mongoose.model("User", userSchema);

export default User;