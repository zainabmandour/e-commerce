// types.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: "Men" | "Women" | "Girls";
  description: string;
}

import men1 from "./assets/1.webp";
import men2 from "./assets/2.webp";
import men3 from "./assets/3.webp";

import women1 from "./assets/g1.jpg";
import women2 from "./assets/g2.webp";
import women3 from "./assets/g3.jpeg";

import girls1 from "./assets/bent1.jpg";
import girls2 from "./assets/bent2.jpg";
import girls3 from "./assets/bent3.jpg";

export const allProducts: Product[] = [
  { id: 1, name: "Men's Shirt", price: 25, image: men1, category: "Men", description: "Comfortable cotton shirt for everyday wear." },
  { id: 2, name: "Men's Jacket", price: 60, image: men2, category: "Men", description: "Stylish jacket for cool weather." },
  { id: 3, name: "Men's Shoes", price: 40, image: men3, category: "Men", description: "Durable and comfortable shoes." },
  { id: 4, name: "Women's Dress", price: 50, image: women1, category: "Women", description: "Elegant dress perfect for outings." },
  { id: 5, name: "Women's Bag", price: 35, image: women2, category: "Women", description: "Spacious and trendy handbag." },
  { id: 6, name: "Women's Shoes", price: 45, image: women3, category: "Women", description: "Comfortable shoes for daily wear." },
  { id: 7, name: "Girls' T-shirt", price: 15, image: girls1, category: "Girls", description: "Cute t-shirt for kids." },
  { id: 8, name: "Girls' Skirt", price: 20, image: girls2, category: "Girls", description: "Colorful skirt for girls." },
  { id: 9, name: "Girls' Shoes", price: 25, image: girls3, category: "Girls", description: "Comfortable kids shoes." },
];
