import React from 'react';
import images from '../assets/images';

const Header = () => {
  return (
    <header className="bg-white shadow-md" id="Header_1">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between" id="Header_2">
        <div className="flex items-center" id="Header_3">
          <img src={images[0]} alt="Logo" className="h-8 w-auto" id="Header_4" />
          <span className="ml-2 text-xl font-bold text-gray-800" id="Header_5">Property Portal</span>
        </div>
        <div className="flex items-center space-x-4" id="Header_6">
          <a href="/properties" className="text-gray-600 hover:text-gray-800" id="Header_7">Properties</a>
          <a href="/profile" className="text-gray-600 hover:text-gray-800" id="Header_8">Profile</a>
          <button 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            id="Header_9"
            onClick={() => {
              localStorage.removeItem('token');
              window.location.href = '/login';
            }}
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;