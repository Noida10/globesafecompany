"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, categories, Product } from "@/lib/data/products";
import EnquiryModal from "@/components/ui/EnquiryModal";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
    return matchesCategory;
  });

  const handleEnquire = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const formatPrice = (price: number) => {
    if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2)}L`;
    }
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-8">
        <div className="container-custom text-white">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">Our Products</h1>
              <p className="text-lg opacity-90">
                Premium security solutions trusted by 500+ businesses
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${viewMode === "grid" ? "bg-white/20" : "bg-transparent"} hover:bg-white/10 transition-colors`}
                title="Grid View"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${viewMode === "list" ? "bg-white/20" : "bg-transparent"} hover:bg-white/10 transition-colors`}
                title="List View"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-4 bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">{filteredProducts.length}</span> products found
            </p>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Category:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills - Desktop */}
          <div className="hidden sm:flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-8">
        <div className="container-custom">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg">
              <svg
                className="w-20 h-20 text-gray-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No products found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category
              </p>
            </div>
          ) : (
            <>
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                    >
                      {/* Product Image */}
                      <Link href={`/products/${product.slug}`} className="block">
                        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                          />
                          {/* Category Badge */}
                          <div className="absolute top-2 left-2">
                            <span className="bg-primary-600/90 backdrop-blur text-white px-2 py-1 rounded text-xs font-medium">
                              {product.category}
                            </span>
                          </div>
                          {/* Quick View on Hover */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 bg-white px-3 py-1.5 rounded-full text-sm font-medium text-gray-900 shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300">
                              Quick View →
                            </span>
                          </div>
                        </div>
                      </Link>

                      {/* Product Info */}
                      <div className="p-4">
                        <Link href={`/products/${product.slug}`} className="block group/title">
                          <h3 className="font-semibold text-gray-900 mb-1 group-hover/title:text-primary-600 transition-colors line-clamp-1 cursor-pointer">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-xs text-gray-600 line-clamp-2 mb-3 min-h-[2rem]">
                          {product.description}
                        </p>

                        {/* Price */}
                        <div className="mb-3">
                          <p className="text-xl font-bold text-primary-600">
                            {formatPrice(product.price)}
                            <span className="text-xs font-normal text-gray-500 ml-1">/{product.unit}</span>
                          </p>
                        </div>

                        {/* Features Preview */}
                        <div className="mb-3 space-y-1">
                          {product.features.slice(0, 2).map((feature, index) => (
                            <div key={index} className="flex items-start">
                              <svg className="w-3 h-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-xs text-gray-600 line-clamp-1">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                          <Link
                            href={`/products/${product.slug}`}
                            className="flex-1 btn-primary text-xs py-2 text-center"
                          >
                            View Details
                          </Link>
                          <button
                            onClick={() => handleEnquire(product)}
                            className="btn-outline text-xs py-2 px-3"
                            title="Quick Enquiry"
                          >
                            Enquire
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* List View */
                <div className="space-y-4">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
                    >
                      <div className="flex flex-col sm:flex-row">
                        {/* Product Image */}
                        <Link href={`/products/${product.slug}`} className="block sm:w-48 flex-shrink-0">
                          <div className="relative h-48 sm:h-full bg-gradient-to-br from-gray-50 to-white">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-contain p-4 hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </Link>

                        {/* Product Info */}
                        <div className="flex-1 p-6">
                          <div className="flex flex-wrap items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-start gap-3 mb-2">
                                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium">
                                  {product.category}
                                </span>
                                <span className="text-xs text-gray-500">SKU: GSC-{product.id.padStart(4, '0')}</span>
                              </div>
                              
                              <Link href={`/products/${product.slug}`} className="group/title">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover/title:text-primary-600 transition-colors cursor-pointer">
                                  {product.name}
                                </h3>
                              </Link>
                              
                              <p className="text-gray-600 mb-3">
                                {product.description}
                              </p>

                              {/* Features */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                                {product.features.slice(0, 4).map((feature, index) => (
                                  <div key={index} className="flex items-start">
                                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-700">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Price and Actions */}
                            <div className="text-right">
                              <p className="text-2xl font-bold text-primary-600 mb-3">
                                {formatPrice(product.price)}
                                <span className="text-sm font-normal text-gray-500 block">per {product.unit}</span>
                              </p>
                              <div className="flex flex-col gap-2">
                                <Link
                                  href={`/products/${product.slug}`}
                                  className="btn-primary text-sm"
                                >
                                  View Details
                                </Link>
                                <button
                                  onClick={() => handleEnquire(product)}
                                  className="btn-outline text-sm"
                                >
                                  Enquire Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-8 bg-white border-t">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-sm mb-1">Quality Assured</h3>
              <p className="text-xs text-gray-600">ISO Certified Products</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
              </div>
              <h3 className="font-semibold text-sm mb-1">Free Delivery</h3>
              <p className="text-xs text-gray-600">Pan-India Shipping</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-sm mb-1">Expert Installation</h3>
              <p className="text-xs text-gray-600">Professional Service</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-sm mb-1">24/7 Support</h3>
              <p className="text-xs text-gray-600">Always Here to Help</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Need a Custom Solution?</h2>
          <p className="text-base sm:text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            We offer tailored security solutions for unique requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-primary-900 hover:bg-gray-100">
              Request Quote
            </Link>
            <a href="tel:+918755309808" className="btn-outline border-white text-white hover:bg-white hover:text-primary-900">
              <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: +91-8755309808
            </a>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      {selectedProduct && (
        <EnquiryModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProduct(null);
          }}
          product={selectedProduct}
        />
      )}
    </main>
  );
}