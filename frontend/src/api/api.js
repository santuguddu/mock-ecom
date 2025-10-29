const API_BASE = "http://localhost:5000/api";

// Fetch all products
export const getProducts = async () => {
  const res = await fetch(`${API_BASE}/products`);
  return res.json();
};

// Add to cart
export const addToCartAPI = async (productId, qty) => {
  const res = await fetch(`${API_BASE}/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId, qty }),
  });
  return res.json();
};

// Remove from cart
export const removeFromCartAPI = async (id) => {
  const res = await fetch(`${API_BASE}/cart/${id}`, { method: "DELETE" });
  return res.json();
};

// Get cart
export const getCart = async () => {
  const res = await fetch(`${API_BASE}/cart`);
  return res.json();
};

// Checkout
export const checkoutAPI = async (cartItems) => {
  const res = await fetch(`${API_BASE}/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cartItems }),
  });
  return res.json();
};
