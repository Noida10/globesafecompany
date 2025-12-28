import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              {/* Simplified Locker Logo */}
              <div className="relative">
                <div className="relative w-12 h-12">
                  <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
                    {/* Outer Frame */}
                    <rect x="8" y="8" width="44" height="44" rx="4" className="fill-gray-700" />
                    <rect x="10" y="10" width="40" height="40" rx="3" className="fill-gray-600" />
                    <rect x="12" y="12" width="36" height="36" rx="2" className="fill-gray-500" />
                    
                    {/* Door Panel */}
                    <rect x="14" y="14" width="32" height="32" rx="1" className="fill-gray-400" />
                    
                    {/* Combination Dial */}
                    <circle cx="30" cy="30" r="7" className="fill-yellow-400" />
                    <circle cx="30" cy="30" r="5" className="fill-yellow-500" />
                    <circle cx="30" cy="30" r="2.5" className="fill-gray-800" />
                    
                    {/* Dial Markers */}
                    <rect x="29" y="21" width="2" height="3" className="fill-white opacity-70" />
                    <rect x="29" y="36" width="2" height="3" className="fill-white opacity-70" />
                    <rect x="21" y="29" width="3" height="2" className="fill-white opacity-70" />
                    <rect x="36" y="29" width="3" height="2" className="fill-white opacity-70" />
                    
                    {/* Handle */}
                    <rect x="40" y="28" width="7" height="4" rx="1" className="fill-gray-300" />
                    
                    {/* Hinges */}
                    <rect x="44" y="19" width="2" height="5" rx="1" className="fill-gray-300" />
                    <rect x="44" y="36" width="2" height="5" rx="1" className="fill-gray-300" />
                  </svg>
                </div>
                {/* Brand Badge */}
                <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center border border-gray-900">
                  <span className="text-white text-[10px] font-bold">G</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Globe Safe</h3>
                <p className="text-xs text-gray-400">Security Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner in premium security solutions. ISO certified manufacturer since 2014.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0C4.477 0 0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.615 11.615 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/safety-lockers" className="text-gray-400 hover:text-white transition-colors">
                  Safety Lockers
                </Link>
              </li>
              <li>
                <Link href="/products/security-safes" className="text-gray-400 hover:text-white transition-colors">
                  Security Safes
                </Link>
              </li>
              <li>
                <Link href="/products/vaults" className="text-gray-400 hover:text-white transition-colors">
                  Vaults
                </Link>
              </li>
              <li>
                <Link href="/products/strong-room-doors" className="text-gray-400 hover:text-white transition-colors">
                  Strong Room Doors
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400 text-sm">
                  Near SBI, Shamshad Road, Bhojpuri, Pilkhuwa, Ghaziabad, UP - 245304
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400">+91-8755309808</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">firoz.saifipkw@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Globe Safe Company. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;