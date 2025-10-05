import React, { useState } from "react";
import { allProducts } from "../types";
import type { Product } from "../types";
import { Link } from "react-router-dom";

interface ProductsProps {
  addToCart: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ addToCart }) => {
  const [category, setCategory] = useState<"All" | "Men" | "Women" | "Girls">("All");

  const filteredProducts =
    category === "All" ? allProducts : allProducts.filter(p => p.category === category);

  return (
    <section className="container mx-auto px-4 pt-20 pb-12">
      {/* pt-20 لتجنب تغطية الهيدر بشكل أنيق */}
      
      {/* Buttons for categories */}
      <div className="flex justify-center gap-4 mb-8">
        {["All", "Men", "Women", "Girls"].map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat as any)}
            className={`px-4 py-2 rounded-lg font-semibold ${
              category === cat ? "bg-black text-white" : "bg-white border text-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition duration-300"
          >
            {/* Link to ProductPage */}
            <Link
              to={`/product/${product.id}`}
              className="w-full relative block"
              style={{ paddingTop: "100%" }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </Link>

            <div className="p-4 flex flex-col items-center">
              <Link to={`/product/${product.id}`}>
                <h3 className="text-lg font-semibold mb-2 text-center">{product.name}</h3>
              </Link>
              <p className="text-black font-bold mb-4">${product.price}</p>
              <button
                className="px-4 py-2 bg-black hover:bg-gray-800 text-white rounded font-semibold w-full"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
