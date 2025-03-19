import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="Header_1" className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div id="Header_2" className="flex items-center">
            <img src={images[0]} alt="Logo" className="h-12 w-auto" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-2">DreamHome</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink id="Header_3" to="/" className={({ isActive }) => `text-lg font-medium transition-colors duration-200 hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-700'}`}>Home</NavLink>
            <NavLink id="Header_4" to="/loginpage" className={({ isActive }) => `text-lg font-medium transition-colors duration-200 hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-700'}`}>Login</NavLink>
            <NavLink id="Header_5" to="/registerpage" className={({ isActive }) => `text-lg font-medium transition-colors duration-200 hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-700'}`}>Register</NavLink>
            <NavLink id="Header_6" to="/dashboard" className={({ isActive }) => `text-lg font-medium transition-colors duration-200 hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-700'}`}>Dashboard</NavLink>
            <NavLink id="Header_7" to="/addpropertypage" className="px-6 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">Add Property</NavLink>
          </div>

          <button id="Header_8" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div id="Header_9" className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 absolute left-0 right-0 mx-4">
            <div className="flex flex-col space-y-4">
              <NavLink to="/" className={({ isActive }) => `text-lg font-medium transition-colors duration-200 hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <NavLink to="/loginpage" className={({ isActive }) => `text-lg font-medium transition-colors duration-200 hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>Login</NavLink>
              <NavLink to="/registerpage" className={({ isActive }) => `text-lg font-medium transition-colors duration-200 hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>Register</NavLink>
              <NavLink to="/dashboard" className={({ isActive }) => `text-lg font-medium transition-colors duration-200 hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>Dashboard</NavLink>
              <NavLink to="/addpropertypage" className="px-6 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-center" onClick={() => setIsMenuOpen(false)}>Add Property</NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;