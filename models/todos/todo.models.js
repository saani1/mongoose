import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        subtodo: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Subtodo"
            },
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ]
    },
    {timestamps: true}
)

export const Todo = mongoose.model("Todo", todoSchema)



