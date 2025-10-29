// models/cartModel.js
import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  name: String,
  price: Number,
  image: String,
  qty: { type: Number, default: 1 },
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
