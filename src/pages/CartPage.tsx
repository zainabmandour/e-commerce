import React from "react";
import type { Product } from "../types";
import { Link } from "react-router-dom";

interface CartPageProps {
  cart: Product[];
  removeFromCart: (id: number) => void;
}

const CartPage: React.FC<CartPageProps> = ({ cart, removeFromCart }) => {
  // حساب الكمية لكل منتج
  const productCounts = cart.reduce<Record<number, { product: Product; quantity: number }>>(
    (acc, item) => {
      if (acc[item.id]) {
        acc[item.id].quantity += 1;
      } else {
        acc[item.id] = { product: item, quantity: 1 };
      }
      return acc;
    },
    {}
  );

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
 <div className="min-h-screen flex flex-col pt-24 bg-gray-100">
  <div className="flex-1 flex flex-col justify-start sm:justify-center items-center max-w-6xl mx-auto px-4 w-full">
    <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
    <div className="flex flex-col lg:flex-row gap-8 w-full">
      {/* Items List */}
      <div className="w-full lg:w-2/3 flex flex-col gap-4">
        {Object.values(productCounts).map(({ product, quantity }) => (
          <div key={product.id} className="flex gap-4 items-center border-b pb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <h4 className="font-bold">{product.name}</h4>
              <p className="text-gray-700">{product.description}</p>
              <p className="text-black font-semibold">
                ${product.price} x {quantity} = ${product.price * quantity}
              </p>
            </div>
            <button
              className="text-red-500 hover:underline"
              onClick={() => removeFromCart(product.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="w-full lg:w-1/3 lg:pl-6 mt-6 lg:mt-0">
        <h3 className="text-xl font-bold mb-4">Order Summary</h3>
        <ul className="mb-4">
          {Object.values(productCounts).map(({ product, quantity }) => (
            <li key={product.id} className="flex justify-between mb-2">
              <span>{product.name} x {quantity}</span>
              <span>${product.price * quantity}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg font-bold mb-4">Total: ${totalPrice}</p>
        <Link
          to="/checkout"
          className="w-full block text-center px-4 py-3 bg-black hover:bg-gray-800 text-white rounded font-semibold"
        >
          Go to Checkout
        </Link>
      </div>
    </div>
  </div>
</div>


  );
};

export default CartPage;
