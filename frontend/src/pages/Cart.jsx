import React from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = ({ cart, updateQty, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="pt-24 pb-12 px-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Your Shopping Cart 🛒
      </h2>

      {cart.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-gray-500 text-lg mb-6">Your cart is empty!</p>
          <Link
            to="/"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQty={updateQty}
              removeFromCart={removeFromCart}
            />
          ))}

          <div className="mt-8 bg-white p-6 rounded-xl shadow-md flex justify-between items-center">
            <h3 className="text-2xl font-semibold text-gray-800">
              Total: <span className="text-indigo-600">₹{total.toLocaleString()}</span>
            </h3>
            <Link
              to="/checkout"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
