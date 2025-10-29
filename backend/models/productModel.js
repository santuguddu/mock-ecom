// models/productModel.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: String,
  description: String,
});

const Product = mongoose.model("Product", productSchema);
export default Product;
