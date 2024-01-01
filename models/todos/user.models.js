import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            uppercase: [true, "It must be in Upper Case"]
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }

    },
    {timestamps: true}
)

export const User = mongoose.model("User", userSchema)