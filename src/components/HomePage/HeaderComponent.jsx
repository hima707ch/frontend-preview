import React, { useState } from 'react';
import images from '../assets/images';

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id="HeaderComponent_1" className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div id="HeaderComponent_2" className="flex items-center">
            <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="ml-3 text-2xl font-bold text-white hover:text-gray-200 transition-colors duration-300">TechHub</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a id="HeaderComponent_3" href="/" className="text-white hover:text-gray-200 transition-colors duration-300">Home</a>
            <a id="HeaderComponent_4" href="/products" className="text-white hover:text-gray-200 transition-colors duration-300">Products</a>
            <a id="HeaderComponent_5" href="/services" className="text-white hover:text-gray-200 transition-colors duration-300">Services</a>
            <a id="HeaderComponent_6" href="/about" className="text-white hover:text-gray-200 transition-colors duration-300">About</a>
            <button id="HeaderComponent_7" className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">Contact Us</button>
          </div>

          <div className="md:hidden">
            <button
              id="HeaderComponent_8"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div id="HeaderComponent_9" className="md:hidden mt-4 pb-4">
            <a href="/" className="block text-white hover:text-gray-200 py-2 transition-colors duration-300">Home</a>
            <a href="/products" className="block text-white hover:text-gray-200 py-2 transition-colors duration-300">Products</a>
            <a href="/services" className="block text-white hover:text-gray-200 py-2 transition-colors duration-300">Services</a>
            <a href="/about" className="block text-white hover:text-gray-200 py-2 transition-colors duration-300">About</a>
            <button className="mt-2 w-full bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">Contact Us</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderComponent;