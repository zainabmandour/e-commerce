// src/components/Hero.tsx
import React from "react";
import heroImage from "../assets/bent2.jpg";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex justify-center items-center text-white overflow-hidden">
      
      {/* الصورة الخلفية */}
      <img
        src={heroImage}
        alt="Hero"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />

      {/* overlay أسود نصف شفاف */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

      {/* المحتوى فوق الصورة */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg">
          Welcome to Our Store
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 drop-shadow-lg max-w-xl">
          Discover amazing products, exclusive deals, and the best online shopping experience.
        </p>

        {/* زر Shop Now */}
        <Link
          to="/products"
          className="px-6 sm:px-8 py-3 sm:py-4 bg-black hover:bg-gray-800 rounded-lg text-white text-lg sm:text-xl font-semibold transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
