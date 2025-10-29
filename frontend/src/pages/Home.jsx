import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // ✅ Try fetching from backend first
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => {
        // ✅ Fallback mock data (with local images from /public/images)
        setProducts([
          {
            id: 1,
            name: "Wireless Headphones",
            price: 1999,
            image: "/images/headphon.jpeg",
          },
          {
            id: 2,
            name: "Smart Watch",
            price: 3499,
            image: "/images/fitnessband.jpg",
          },
          {
            id: 3,
            name: "Bluetooth Speaker",
            price: 1499,
            image: "/images/blueetoth.jpg",
          },
          {
            id: 4,
            name: "Laptop Backpack",
            price: 999,
            image: "/images/laptopbackpack.jpg",
          },
          {
            id: 5,
            name: "Fitness Band",
            price: 1299,
            image: "/images/fitnessband.jpg",
          },
          {
            id: 6,
            name: "Gaming Mouse",
            price: 799,
            image: "/images/gaming mouse.jpg",
          },
          {
            id: 7,
            name: "Mechanical Keyboard",
            price: 2499,
            image: "/images/keyboard.jpg",
          },
          {
            id: 8,
            name: "DSLR Camera",
            price: 55999,
            image: "/images/dslr camera.jpg",
          },
        ]);
      });
  }, []);

  return (
    <div className="pt-24 pb-12 px-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Explore Our Latest Products 🛍️
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
