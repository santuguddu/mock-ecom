import express from "express";
const router = express.Router();

// Mock cart
let cart = [];

// ✅ GET /api/cart - Get cart with total
router.get("/", (req, res) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  res.json({ cart, total });
});

// ✅ POST /api/cart - Add product to cart
router.post("/", (req, res) => {
  const { productId, name, price, image } = req.body;
  const existing = cart.find((item) => item.productId === productId);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ productId, name, price, image, qty: 1 });
  }

  res.status(201).json({ message: "Item added to cart", cart });
});

// ✅ DELETE /api/cart/:id - Remove product from cart
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  cart = cart.filter((item) => item.productId !== id);
  res.json({ message: "Item removed from cart", cart });
});

// ✅ POST /api/cart/checkout - Mock checkout
router.post("/checkout", (req, res) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const timestamp = new Date().toLocaleString();
  const receipt = { total, timestamp, items: cart };
  cart = []; // empty after checkout
  res.json({ message: "Checkout successful!", receipt });
});

export default router;
