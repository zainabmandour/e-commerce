// src/App.tsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import type { Product } from "./types";

const App: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const buyNow = (product: Product) => {
    if (!cart.some(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id: number) => {
    const index = cart.findIndex(item => item.id === id);
    if (index !== -1) {
      setCart(prev => {
        const newCart = [...prev];
        newCart.splice(index, 1);
        return newCart;
      });
    }
  };

  return (
    <>
      <Header cartCount={cart.length} />
      <Routes>
        {/* Hero بدون padding top عشان الهيدر ثابت فوقه */}
        <Route path="/" element={<Hero />} />

        {/* باقي الصفحات محتاجين padding top لتجنب تغطية الهيدر */}
        <Route
          path="/products"
          element={
            <div className="pt-24">
              <Products addToCart={addToCart} />
            </div>
          }
        />
        <Route
          path="/product/:id"
          element={
            <div className="pt-24">
              <ProductPage addToCart={addToCart} buyNow={buyNow} />
            </div>
          }
        />
        <Route
          path="/cart"
          element={
            <div className="pt-24">
              <CartPage cart={cart} removeFromCart={removeFromCart} />
            </div>
          }
        />
        <Route
          path="/checkout"
          element={
            <div className="pt-24">
              <CheckoutPage />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="pt-24">
              <LoginPage />
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <div className="pt-24">
              <RegisterPage />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="pt-24">
              <AboutPage />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="pt-24">
              <ContactPage />
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
