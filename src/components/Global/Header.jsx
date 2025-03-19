import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserPlus, FaTachometerAlt, FaBuilding } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState('seller'); // Example role, should come from auth context

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="Header_1"
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/homepage"
            id="Header_2"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
          >
            PropertyHub
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/homepage"
              id="Header_3"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300"
            >
              <FaHome className="text-xl" />
              <span>Home</span>
            </Link>

            <Link
              to="/loginpage"
              id="Header_4"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300"
            >
              <FaSignInAlt className="text-xl" />
              <span>Login</span>
            </Link>

            <Link
              to="/registerpage"
              id="Header_5"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300"
            >
              <FaUserPlus className="text-xl" />
              <span>Register</span>
            </Link>

            <Link
              to="/dashboard"
              id="Header_6"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300"
            >
              <FaTachometerAlt className="text-xl" />
              <span>Dashboard</span>
            </Link>

            {userRole === 'seller' && (
              <Link
                to="/addpropertypage"
                id="Header_7"
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                <FaBuilding className="text-xl" />
                <span>Add Property</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            id="Header_8"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            id="Header_9"
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 space-y-4"
          >
            <Link
              to="/homepage"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaHome className="text-xl" />
              <span>Home</span>
            </Link>

            <Link
              to="/loginpage"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaSignInAlt className="text-xl" />
              <span>Login</span>
            </Link>

            <Link
              to="/registerpage"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaUserPlus className="text-xl" />
              <span>Register</span>
            </Link>

            <Link
              to="/dashboard"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaTachometerAlt className="text-xl" />
              <span>Dashboard</span>
            </Link>

            {userRole === 'seller' && (
              <Link
                to="/addpropertypage"
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaBuilding className="text-xl" />
                <span>Add Property</span>
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;