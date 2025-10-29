import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-white text-2xl font-bold tracking-wide hover:text-gray-200 transition-all"
        >
          🛍️ VibeCart
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-white font-medium hover:text-gray-200 transition-all"
          >
            Home
          </Link>
          <Link
            to="/cart"
            className="relative text-white font-medium hover:text-gray-200 transition-all"
          >
            <FaShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
