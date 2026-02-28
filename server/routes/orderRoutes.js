import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// Create Order
router.post("/", async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
});

// Get Seller Orders
router.get("/", async (req, res) => {
  const orders = await Order.find().populate("products.product");
  res.json(orders);
});

export default router;
