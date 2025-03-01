import React, { useState } from 'react';
import images from '../assets/images';

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center" id="HeaderComponent_1">
            <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full"/>
            <span className="text-white text-xl font-bold ml-3" id="HeaderComponent_2">Brand</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8" id="HeaderComponent_3">
            <a href="#" className="text-white hover:text-gray-200 transition duration-300">Home</a>
            <a href="#" className="text-white hover:text-gray-200 transition duration-300">About</a>
            <a href="#" className="text-white hover:text-gray-200 transition duration-300">Services</a>
            <a href="#" className="text-white hover:text-gray-200 transition duration-300">Contact</a>
            <button className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300">Sign In</button>
          </div>

          <div className="md:hidden" id="HeaderComponent_4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4" id="HeaderComponent_5">
            <a href="#" className="block text-white hover:text-gray-200 py-2">Home</a>
            <a href="#" className="block text-white hover:text-gray-200 py-2">About</a>
            <a href="#" className="block text-white hover:text-gray-200 py-2">Services</a>
            <a href="#" className="block text-white hover:text-gray-200 py-2">Contact</a>
            <button className="mt-3 w-full bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300">Sign In</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderComponent;