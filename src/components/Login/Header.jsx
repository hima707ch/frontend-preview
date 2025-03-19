import React from 'react';
import images from '../assets/images';

const Header = () => {
  return (
    <header className="bg-white shadow-md" id="Header_1">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between" id="Header_2">
        <div className="flex items-center" id="Header_3">
          <img src={images[0]} alt="Logo" className="h-10 w-auto" id="Header_4" />
          <h1 className="text-xl font-bold text-gray-800 ml-2" id="Header_5">Property Portal</h1>
        </div>
        <nav id="Header_6">
          <ul className="flex space-x-6" id="Header_7">
            <li><a href="/" className="text-gray-600 hover:text-gray-900" id="Header_8">Home</a></li>
            <li><a href="/register" className="text-gray-600 hover:text-gray-900" id="Header_9">Register</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;