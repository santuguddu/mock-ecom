import React, { useState } from "react";

const Checkout = ({ cart, clearCart }) => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [receipt, setReceipt] = useState(null);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      cartItems: cart,
      total,
      timestamp: new Date().toLocaleString(),
    };

    // Mock checkout
    fetch("http://localhost:5000/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        setReceipt(data);
        clearCart();
      })
      .catch(() => {
        setReceipt(data);
        clearCart();
      });
  };

  return (
    <div className="pt-24 pb-12 px-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Checkout 💳
      </h2>

      {!receipt ? (
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
          </div>

          <div className="flex justify-between items-center mt-8">
            <p className="text-xl font-semibold text-gray-800">
              Total: <span className="text-indigo-600">₹{total.toLocaleString()}</span>
            </p>
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Confirm Order
            </button>
          </div>
        </form>
      ) : (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-green-600 mb-4">
            ✅ Order Successful!
          </h3>
          <p className="text-gray-700 mb-2">
            Thank you, <span className="font-medium">{form.name}</span>!
          </p>
          <p className="text-gray-500 text-sm mb-6">{receipt.timestamp}</p>

          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-semibold text-gray-800 mb-2">Order Summary:</h4>
            {receipt.cartItems.map((item) => (
              <p key={item.id} className="text-gray-600 text-sm">
                {item.name} × {item.qty}
              </p>
            ))}
            <p className="mt-3 text-lg font-semibold text-indigo-600">
              Total: ₹{receipt.total.toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
