"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data/products";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Safety Lockers", "Security Safes", "Vaults", "Floor Safes"];
  
  const filteredProducts = activeCategory === "All" 
    ? products.slice(0, 6) 
    : products.filter(p => p.category === activeCategory).slice(0, 6);

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Explore our comprehensive range of security solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-56 bg-gradient-to-br from-gray-50 to-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </span>
                </div>
                {product.price >= 100000 && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      PREMIUM
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-3 line-clamp-2 text-sm">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-2xl font-bold text-primary-600">
                    ₹{product.price.toLocaleString('en-IN')}
                  </p>
                  <span className="text-xs text-gray-500">per {product.unit}</span>
                </div>
                <Link
                  href={`/products/${product.slug}`}
                  className="btn-primary w-full text-center text-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;