import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve images from frontend/public/images
router.use("/images", express.static(path.join(__dirname, "../../frontend/public/images")));

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    image: "/images/headphon.jpeg",
    category: "Electronics",
    description: "Premium noise-cancelling headphones with long battery life",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 3499,
    image: "/images/fitnessband.jpg",
    category: "Electronics",
    description: "Fitness tracking smartwatch with heart rate monitor",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 1499,
    image: "/images/blueetoth.jpg",
    category: "Electronics",
    description: "Portable waterproof speaker with deep bass",
  },
  {
    id: 4,
    name: "Laptop Backpack",
    price: 999,
    image: "/images/laptopbackpack.jpg",
    category: "Accessories",
    description: "Durable backpack with USB charging port",
  },
  {
    id: 5,
    name: "Gaming Mouse",
    price: 799,
    image: "/images/gaming mouse.jpg",
    category: "Gaming",
    description: "RGB high-precision gaming mouse",
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 2199,
    image: "/images/keyboard.jpg",
    category: "Gaming",
    description: "Responsive typing with mechanical keys",
  },
  {
    id: 7,
    name: "DSLR Camera",
    price: 5999,
    image: "/images/dslr camera.jpg",
    category: "Photography",
    description: "Capture moments in 4K clarity",
  },
];

// ✅ GET /api/products - Get all products
router.get("/", (req, res) => {
  res.json(products);
});

export default router;
