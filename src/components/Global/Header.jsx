import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    // Check authentication status from localStorage or context
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('userRole');
    setIsLoggedIn(!!token);
    setUserRole(role || '');
  }, []);

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-purple-600 fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3" id="Header_2">
            <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="text-white text-xl font-bold">YourBrand</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" id="Header_3">
            <Link to="/" className="text-white hover:text-blue-200 transition duration-300">Home</Link>
            {!isLoggedIn ? (
              <>
                <Link to="/registerpage" className="text-white hover:text-blue-200 transition duration-300">Register</Link>
                <Link to="/loginpage" className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100 transition duration-300">Login</Link>
              </>
            ) : (
              <>
                <Link to="/profilepage" className="text-white hover:text-blue-200 transition duration-300">Profile</Link>
                {userRole === 'seller' && (
                  <Link to="/sellerdashboard" className="text-white hover:text-blue-200 transition duration-300">Seller Dashboard</Link>
                )}
                <button
                  onClick={() => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('userRole');
                    setIsLoggedIn(false);
                    setUserRole('');
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            id="Header_4"
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4" id="Header_5">
            <Link to="/" className="block text-white hover:bg-blue-500 px-3 py-2 rounded-md">Home</Link>
            {!isLoggedIn ? (
              <>
                <Link to="/registerpage" className="block text-white hover:bg-blue-500 px-3 py-2 rounded-md">Register</Link>
                <Link to="/loginpage" className="block text-white hover:bg-blue-500 px-3 py-2 rounded-md">Login</Link>
              </>
            ) : (
              <>
                <Link to="/profilepage" className="block text-white hover:bg-blue-500 px-3 py-2 rounded-md">Profile</Link>
                {userRole === 'seller' && (
                  <Link to="/sellerdashboard" className="block text-white hover:bg-blue-500 px-3 py-2 rounded-md">Seller Dashboard</Link>
                )}
                <button
                  onClick={() => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('userRole');
                    setIsLoggedIn(false);
                    setUserRole('');
                    setIsOpen(false);
                  }}
                  className="block w-full text-left text-white hover:bg-red-500 px-3 py-2 rounded-md"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;