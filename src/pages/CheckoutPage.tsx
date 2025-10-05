// src/pages/CheckoutPage.tsx
import React from "react";
import { Link } from "react-router-dom";

const CheckoutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 flex flex-col items-center">
      {/* pt-24 عشان الهيدر الثابت */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

        <p className="text-gray-700 mb-4 text-center">
          Fill in your details to complete the purchase.
        </p>

        {/* نموذج بسيط */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Shipping Address"
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Card Number"
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Expiry Date"
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="CVV"
            className="p-3 border rounded-lg w-full"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Complete Purchase
          </button>
        </form>

        <Link
          to="/cart"
          className="block mt-4 text-center text-blue-600 hover:underline"
        >
          Back to Cart
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
