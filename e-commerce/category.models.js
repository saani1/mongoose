import mongoose  from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            uppercase: true
        }
    },
    {timestamps: true}
)



export const Category = mongoose.model("Category", categorySchema)