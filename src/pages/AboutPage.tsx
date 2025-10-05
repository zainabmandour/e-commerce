import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 pt-24">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="max-w-2xl text-center text-lg text-gray-700">
        Welcome to our e-commerce store! We offer the best products with 
        top-notch customer service. Our mission is to provide an enjoyable 
        shopping experience for everyone.
      </p>
      <div className="w-full max-w-3xl mt-8 h-64 bg-gray-300 flex items-center justify-center text-gray-500 font-semibold">
        [Image Placeholder]
      </div>
    </div>
  );
};

export default AboutPage;

