// controllers/productController.js

// Mock product list (10 items)
const products = [
  { id: 1, name: "Wireless Headphones", price: 1999, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&w=800&q=80", category: "Electronics", description: "Premium noise-cancelling headphones with long battery life" },
  { id: 2, name: "Smart Watch", price: 3499, image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&w=800&q=80", category: "Electronics", description: "Fitness tracking smartwatch with heart rate monitor" },
  { id: 3, name: "Bluetooth Speaker", price: 1499, image: "https://images.unsplash.com/photo-1618365908648-42f61a1163c4?auto=format&w=800&q=80", category: "Electronics", description: "Portable waterproof speaker with deep bass" },
  { id: 4, name: "Laptop Backpack", price: 999, image: "https://images.unsplash.com/photo-1618354691373-d850b1e49d68?auto=format&w=800&q=80", category: "Accessories", description: "Durable backpack with USB charging port" },
  { id: 5, name: "Fitness Band", price: 1299, image: "https://images.unsplash.com/photo-1610398908479-f8a2cf4d9943?auto=format&w=800&q=80", category: "Electronics", description: "Track steps, calories, and sleep efficiently" },
  { id: 6, name: "DSLR Camera", price: 5999, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&w=800&q=80", category: "Photography", description: "Capture moments in 4K clarity" },
  { id: 7, name: "Gaming Mouse", price: 799, image: "https://images.unsplash.com/photo-1615043911781-4d8e8d11f42a?auto=format&w=800&q=80", category: "Gaming", description: "RGB high-precision gaming mouse" },
  { id: 8, name: "Mechanical Keyboard", price: 2199, image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&w=800&q=80", category: "Gaming", description: "Responsive typing with mechanical keys" },
  { id: 9, name: "Wireless Charger", price: 699, image: "https://images.unsplash.com/photo-1598327105266-5b89351aff97?auto=format&w=800&q=80", category: "Accessories", description: "Fast wireless charging for all devices" },
  { id: 10, name: "Smartphone Stand", price: 499, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&w=800&q=80", category: "Accessories", description: "Adjustable aluminum phone stand" },
];

// ✅ Controller to get all products
export const getAllProducts = (req, res) => {
  try {
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products", error: error.message });
  }
};

// ✅ Controller to get product by ID
export const getProductById = (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};
