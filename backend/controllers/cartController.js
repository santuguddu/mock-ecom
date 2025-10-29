// controllers/cartController.js

let cart = []; // Mock in-memory cart

// ✅ Get all cart items
export const getCart = (req, res) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  res.status(200).json({ cart, total });
};

// ✅ Add item to cart
export const addToCart = (req, res) => {
  const { productId, name, price, image } = req.body;

  if (!productId || !name || !price) {
    return res.status(400).json({ message: "Invalid product details" });
  }

  const existingItem = cart.find((item) => item.productId === productId);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ productId, name, price, image, qty: 1 });
  }

  res.status(201).json({ message: "Item added to cart", cart });
};

// ✅ Remove item from cart
export const removeFromCart = (req, res) => {
  const id = parseInt(req.params.id);
  cart = cart.filter((item) => item.productId !== id);
  res.json({ message: "Item removed", cart });
};

// ✅ Mock checkout
export const checkout = (req, res) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const timestamp = new Date().toLocaleString();

  const receipt = {
    orderId: Math.floor(Math.random() * 1000000),
    total,
    timestamp,
    items: cart,
  };

  cart = []; // clear after checkout
  res.json({ message: "Checkout successful", receipt });
};
