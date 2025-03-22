import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status from localStorage or context
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
    setUserRole(localStorage.getItem('userRole') || '');
  }, []);

  const handleLogout = async () => {
    try {
      // Call logout API endpoint
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      localStorage.clear();
      setIsAuthenticated(false);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header id="Header_1" className="fixed w-full top-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3" id="Header_2">
            <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="text-2xl font-bold text-white hover:text-gray-200 transition-colors duration-300">PropertyHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6" id="Header_3">
            <Link to="/" className="text-white hover:text-gray-200 transition-colors duration-300">Home</Link>
            {isAuthenticated ? (
              <>
                <Link to="/properties" className="text-white hover:text-gray-200 transition-colors duration-300">Property Listings</Link>
                {userRole === 'seller' && (
                  <Link to="/add-property" className="text-white hover:text-gray-200 transition-colors duration-300">Add Property</Link>
                )}
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
                  id="Header_4"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/registration" 
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  id="Header_5"
                >
                  Register
                </Link>
                <Link 
                  to="/login" 
                  className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                  id="Header_6"
                >
                  Login
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            id="Header_7"
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
          <div className="md:hidden mt-4 space-y-4" id="Header_8">
            <Link to="/" className="block text-white hover:text-gray-200 transition-colors duration-300">Home</Link>
            {isAuthenticated ? (
              <>
                <Link to="/properties" className="block text-white hover:text-gray-200 transition-colors duration-300">Property Listings</Link>
                {userRole === 'seller' && (
                  <Link to="/add-property" className="block text-white hover:text-gray-200 transition-colors duration-300">Add Property</Link>
                )}
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-white hover:text-gray-200 transition-colors duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/registration" className="block text-white hover:text-gray-200 transition-colors duration-300">Register</Link>
                <Link to="/login" className="block text-white hover:text-gray-200 transition-colors duration-300">Login</Link>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;