"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Blue Line */}
      <div className="h-0.5 bg-primary-600"></div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-md"
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                {/* Simplified Locker Logo */}
                <div className="relative w-14 h-14">
                  <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
                    {/* Outer Frame */}
                    <rect x="8" y="8" width="44" height="44" rx="4" className="fill-gray-800 group-hover:fill-primary-800 transition-colors duration-300" />
                    <rect x="10" y="10" width="40" height="40" rx="3" className="fill-gray-700 group-hover:fill-primary-700 transition-colors duration-300" />
                    <rect x="12" y="12" width="36" height="36" rx="2" className="fill-gray-600 group-hover:fill-primary-600 transition-colors duration-300" />
                    
                    {/* Door Panel */}
                    <rect x="14" y="14" width="32" height="32" rx="1" className="fill-gray-500 group-hover:fill-primary-500 transition-colors duration-300" />
                    
                    {/* Combination Dial */}
                    <circle cx="30" cy="30" r="8" className="fill-yellow-400" />
                    <circle cx="30" cy="30" r="6" className="fill-yellow-500" />
                    <circle cx="30" cy="30" r="3" className="fill-gray-800" />
                    
                    {/* Dial Markers */}
                    <rect x="29" y="20" width="2" height="4" className="fill-white opacity-80" />
                    <rect x="29" y="36" width="2" height="4" className="fill-white opacity-80" />
                    <rect x="20" y="29" width="4" height="2" className="fill-white opacity-80" />
                    <rect x="36" y="29" width="4" height="2" className="fill-white opacity-80" />
                    
                    {/* Handle */}
                    <rect x="40" y="28" width="8" height="4" rx="1" className="fill-gray-400" />
                    <rect x="46" y="29" width="4" height="2" className="fill-gray-500" />
                    
                    {/* Hinges */}
                    <rect x="44" y="18" width="2" height="6" rx="1" className="fill-gray-400" />
                    <rect x="44" y="36" width="2" height="6" rx="1" className="fill-gray-400" />
                    
                    {/* 3D Shadow Effect */}
                    <rect x="10" y="10" width="44" height="44" rx="4" className="fill-black opacity-10 transform translate-x-0.5 translate-y-0.5" style={{ filter: 'blur(2px)' }} />
                  </svg>
                </div>
                {/* Brand Badge */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-sm border-2 border-white">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  Globe Safe
                </h1>
                <p className="text-xs text-gray-500">Premium Security Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center space-x-1 mr-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 relative ${
                      pathname === link.href
                        ? "text-primary-600 bg-primary-50"
                        : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 rounded-full" />
                    )}
                  </Link>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href="tel:+918755309808"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm font-medium">Call Us</span>
                </a>
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`absolute h-0.5 w-6 bg-gray-900 transition-all duration-300 ease-out ${
                  isMenuOpen ? "rotate-45" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-gray-900 transition-all duration-300 ease-out ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-gray-900 transition-all duration-300 ease-out ${
                  isMenuOpen ? "-rotate-45" : "translate-y-2"
                }`}
              />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="space-y-1 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                    pathname === link.href
                      ? "text-primary-600 bg-primary-50"
                      : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 space-y-2">
                <a
                  href="tel:+918755309808"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call: +91-8755309808
                </a>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-primary-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border/Divider */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200" />
      </nav>
    </>
  );
};

export default Navbar;