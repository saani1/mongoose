import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }
)
const addressSchema = new mongoose.Schema(
    {
        pincode : {
            type: Number,
        },
        city : {
            type: String,
        },
        completeaddress: {
            type: String,
        }
    }
)

const orderSchema = new mongoose.Schema(
    {
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        orderPrice: {
            type: Number,
            required: true
        },
        orderItem: {
           type:  [orderItemSchema],
           required: true
        },
        address: {
            type: [addressSchema],
            required:true
        },
        status: {
            type: String,
            enum: ["Pending","Cancel","Completed"],
            default: "Pending"
        }
    },
    {timestamps: true}
)

export const Order = mongoose.model("Order", orderSchema)