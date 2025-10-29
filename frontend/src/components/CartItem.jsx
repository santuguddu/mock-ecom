import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = ({ item, updateQty, removeFromCart }) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all mb-3">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 rounded-lg object-cover border"
        />
        <div>
          <h4 className="text-gray-800 font-semibold">{item.name}</h4>
          <p className="text-indigo-600 font-medium">₹{item.price}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => updateQty(item.id, item.qty - 1)}
          className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-md font-semibold"
        >
          −
        </button>
        <span className="text-gray-700 font-medium">{item.qty}</span>
        <button
          onClick={() => updateQty(item.id, item.qty + 1)}
          className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-md font-semibold"
        >
          +
        </button>

        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:text-red-600 ml-3"
        >
          <FaTrashAlt size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
