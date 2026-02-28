import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number
    }
  ],
  totalPrice: Number,
  shippingAddress: String,
  status: { type: String, default: "Processing" }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
