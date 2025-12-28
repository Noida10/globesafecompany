"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, getProductsByCategory } from "@/lib/data/products";
import EnquiryModal from "@/components/ui/EnquiryModal";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Get related products from the same category
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="bg-gray-50">
      {/* Breadcrumb */}
      <section className="py-2 bg-white border-b">
        <div className="container-custom">
          <nav className="flex items-center space-x-1 text-xs sm:text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products" className="text-gray-500 hover:text-primary-600 transition-colors">
              Products
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900 font-medium truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-6 sm:py-8 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
            {/* Product Image */}
            <div className="space-y-3">
              <div className="relative h-[350px] sm:h-[400px] lg:h-[450px] rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  priority
                />
                <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  BEST SELLER
                </div>
              </div>
              
              {/* Image Gallery Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative h-20 rounded border-2 overflow-hidden cursor-pointer transition-all ${
                      selectedImage === i 
                        ? 'border-primary-500 shadow-md scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
                    } bg-gradient-to-br from-gray-50 to-white`}
                  >
                    <Image
                      src={product.image}
                      alt={`${product.name} view ${i + 1}`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {product.category}
                </span>
                <span className="text-xs text-gray-500">SKU: GSC-{product.id.padStart(4, '0')}</span>
              </div>
              
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{product.description}</p>
              </div>

              {/* Price Display */}
              <div className="p-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg border border-primary-200">
                <div className="flex items-baseline justify-between">
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wide">Special Price</p>
                    <p className="text-2xl sm:text-3xl font-bold text-primary-700">
                      ₹{product.price.toLocaleString('en-IN')}
                    </p>
                  </div>
                  <span className="text-sm text-gray-600 bg-white px-2 py-1 rounded">per {product.unit}</span>
                </div>
              </div>

              {/* Key Features - Compact Grid */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs text-gray-700 leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
                {product.features.length > 4 && (
                  <p className="text-xs text-primary-600 mt-2">+ {product.features.length - 4} more features</p>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1 btn-primary text-sm sm:text-base"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Get Quote
                </button>
                <a
                  href="tel:+918755309808"
                  className="flex-1 btn-outline flex items-center justify-center text-sm sm:text-base"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Now
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-4 gap-3 py-4 border-t">
                <div className="text-center">
                  <svg className="w-6 h-6 mx-auto mb-1 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100-4h2a1 1 0 100-2 2 2 0 00-2 2v11a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs text-gray-600">Warranty</p>
                </div>
                <div className="text-center">
                  <svg className="w-6 h-6 mx-auto mb-1 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                  <p className="text-xs text-gray-600">Free Delivery</p>
                </div>
                <div className="text-center">
                  <svg className="w-6 h-6 mx-auto mb-1 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs text-gray-600">Installation</p>
                </div>
                <div className="text-center">
                  <svg className="w-6 h-6 mx-auto mb-1 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <p className="text-xs text-gray-600">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications & Description Tabs */}
      <section className="py-6 bg-white border-t">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Specifications */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Technical Specifications
              </h2>
              <div className="bg-white rounded-lg border overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {product.specifications.map((spec, index) => (
                      <tr key={index} className="border-b last:border-b-0 hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 text-sm font-medium text-gray-700 bg-gray-50 w-2/5">{spec.label}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Info Sidebar */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Why Choose This?
                </h3>
                <ul className="space-y-1 text-sm text-blue-800">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Industry-leading quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>10+ years of trust</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>500+ satisfied customers</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">Special Offer</h3>
                <p className="text-sm text-green-800">Get 10% off on bulk orders above 5 units</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-6 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h2 className="text-xl font-bold mb-4">About This Product</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {product.detailedDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Compact */}
      <section className="py-6 bg-white">
        <div className="container-custom">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-3">
            {product.faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="px-4 py-3 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors flex items-center justify-between">
                    <span className="font-medium text-sm text-gray-900 pr-2">{faq.question}</span>
                    <svg 
                      className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 py-3 bg-white">
                    <p className="text-sm text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products - Compact */}
      {relatedProducts.length > 0 && (
        <section className="py-6 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-xl font-bold mb-4">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.slug}`}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="relative h-40 bg-gradient-to-br from-gray-50 to-white">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm mb-1 group-hover:text-primary-600 transition-colors line-clamp-1">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                      {relatedProduct.description}
                    </p>
                    <p className="text-lg font-bold text-primary-600">
                      ₹{relatedProduct.price.toLocaleString('en-IN')}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section - Compact */}
      <section className="py-8 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-2">Need Help Choosing?</h2>
          <p className="text-base mb-4 opacity-90">
            Our experts are here to help you find the perfect solution
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-primary-900 hover:bg-gray-100">
              Contact Expert
            </Link>
            <a href="https://wa.me/918755309808" className="btn-outline border-white text-white hover:bg-white hover:text-primary-900">
              <svg className="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </main>
  );
}