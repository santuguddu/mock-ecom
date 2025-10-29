import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("🛒 Mock E-Com Cart Backend is running!");
});

// Start server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
