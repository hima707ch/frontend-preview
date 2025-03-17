import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/homepage" className="flex items-center space-x-2">
            <img id="Header_2" src={images[0]} alt="Logo" className="h-10 w-10 rounded-full hover:opacity-80 transition-opacity" />
            <span id="Header_3" className="text-white text-2xl font-bold hover:text-gray-200">PropertyHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div id="Header_4" className="hidden md:flex items-center space-x-6">
            <Link to="/homepage" className="text-white hover:text-gray-200 transition-colors duration-200">Home</Link>
            {!isAuthenticated ? (
              <>
                <Link to="/register" className="text-white hover:text-gray-200 transition-colors duration-200">Register</Link>
                <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200">Login</Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className="text-white hover:text-gray-200 transition-colors duration-200">Dashboard</Link>
                <Link to="/addproperty" className="text-white hover:text-gray-200 transition-colors duration-200">Add Property</Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors duration-200"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            id="Header_5"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="Header_6" className="md:hidden mt-4 space-y-4">
            <Link to="/homepage" className="block text-white hover:text-gray-200 transition-colors duration-200">Home</Link>
            {!isAuthenticated ? (
              <>
                <Link to="/register" className="block text-white hover:text-gray-200 transition-colors duration-200">Register</Link>
                <Link to="/login" className="block text-white hover:text-gray-200 transition-colors duration-200">Login</Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className="block text-white hover:text-gray-200 transition-colors duration-200">Dashboard</Link>
                <Link to="/addproperty" className="block text-white hover:text-gray-200 transition-colors duration-200">Add Property</Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-white hover:text-gray-200 transition-colors duration-200"
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