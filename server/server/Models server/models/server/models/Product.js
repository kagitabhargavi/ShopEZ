import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  description: String,
  image: String,
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  stock: Number
});

export default mongoose.model("Product", productSchema);
