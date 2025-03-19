import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    navigate('/');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <header id="Header_1" className="bg-gradient-to-r from-gray-100 to-gray-200 shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img id="Header_2" src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
            <span id="Header_3" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">PropertyHub</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link id="Header_4" to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Home</Link>
            {!isAuthenticated ? (
              <>
                <Link id="Header_5" to="/login" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Login</Link>
                <Link id="Header_6" to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium">
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link id="Header_7" to="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Dashboard</Link>
                <Link id="Header_8" to="/addproperty" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Add Property</Link>
                <button
                  id="Header_9"
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 font-medium"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          <button
            id="Header_10"
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-300"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {showMobileMenu ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {showMobileMenu && (
          <div id="Header_11" className="md:hidden mt-4 space-y-4 pb-4">
            <Link to="/" className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Home</Link>
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Login</Link>
                <Link to="/register" className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Register</Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Dashboard</Link>
                <Link to="/addproperty" className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Add Property</Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
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