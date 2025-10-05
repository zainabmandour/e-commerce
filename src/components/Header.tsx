// src/components/Header.tsx
import React from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  return (
    <header className="flex justify-between items-center px-6 sm:px-16 py-4 bg-white shadow-md fixed w-full z-50">
      {/* الشعار */}
      <div className="text-2xl sm:text-3xl font-extrabold text-gray-800">
        <Link to="/">E-Commerce</Link>
      </div>

      {/* قائمة التنقل */}
      <nav className="hidden md:flex space-x-8 text-base md:text-lg font-medium">
        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        <Link to="/products" className="hover:text-blue-600 transition">Products</Link>
        <Link to="/about" className="hover:text-blue-600 transition">About</Link>
        <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
      </nav>

      {/* أيقونات المستخدم والكارت */}
      <div className="flex space-x-4 sm:space-x-6 items-center text-base sm:text-lg relative">
        <Link to="/login" className="flex items-center space-x-1 sm:space-x-2 hover:text-blue-600 transition">
          <FaUser /> <span className="hidden sm:inline">Login</span>
        </Link>
        <Link to="/register" className="flex items-center space-x-1 sm:space-x-2 hover:text-blue-600 transition">
          <FaUser /> <span className="hidden sm:inline">Register</span>
        </Link>
        <Link to="/cart" className="relative hover:text-blue-600 transition">
          <FaShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
