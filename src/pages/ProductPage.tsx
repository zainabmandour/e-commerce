import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Product } from "../types";
import { allProducts } from "../types";

interface ProductPageProps {
  addToCart: (product: Product) => void;
  buyNow: (product: Product) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ addToCart, buyNow }) => {
  const { id } = useParams<{ id: string }>();
  const product = allProducts.find((p) => p.id === Number(id));
  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="text-center py-20 text-xl font-semibold text-gray-800">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-24 flex justify-center items-center">
      {/* pt-24 عشان الهيدر الثابت */}
      <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* صورة المنتج */}
        <div className="w-full md:w-1/2 h-[600px] relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* تفاصيل المنتج */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold text-gray-800 mb-4">${product.price}</p>
            <p className="text-gray-700 text-lg">
              {product.description || "This is a great product that you'll love!"}
            </p>
          </div>

          <div className="flex gap-4 mt-6">
            {/* Buy Now */}
            <button
              className="flex-1 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition"
              onClick={() => {
                buyNow(product);
                navigate("/checkout");
              }}
            >
              Buy Now
            </button>

            {/* Add to Cart */}
            <button
              className="flex-1 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
