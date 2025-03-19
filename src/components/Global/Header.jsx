import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status from local storage or context
    const authStatus = localStorage.getItem('isAuthenticated');
    const userRole = localStorage.getItem('userRole');
    setIsAuthenticated(authStatus === 'true');
    setIsSeller(userRole === 'seller');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    setIsAuthenticated(false);
    setIsSeller(false);
    navigate('/homepage');
  };

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-purple-600 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/homepage" className="flex-shrink-0" id="Header_2">
            <img
              className="h-12 w-auto hover:opacity-80 transition-opacity duration-300"
              src={images[0]}
              alt="Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" id="Header_3">
            <Link
              to="/homepage"
              className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Home
            </Link>
            {!isAuthenticated && (
              <>
                <Link
                  to="/loginpage"
                  className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/registerpage"
                  className="bg-white text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Register
                </Link>
              </>
            )}
            {isAuthenticated && (
              <>
                <Link
                  to="/dashboard"
                  className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Dashboard
                </Link>
                {isSeller && (
                  <Link
                    to="/addpropertypage"
                    className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                  >
                    Add Property
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white hover:bg-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Logout
                </button>
              </>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center" id="Header_4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 hover:bg-blue-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="Header_5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-700">
            <Link
              to="/homepage"
              className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            {!isAuthenticated && (
              <>
                <Link
                  to="/loginpage"
                  className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/registerpage"
                  className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Register
                </Link>
              </>
            )}
            {isAuthenticated && (
              <>
                <Link
                  to="/dashboard"
                  className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </Link>
                {isSeller && (
                  <Link
                    to="/addpropertypage"
                    className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Add Property
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="text-white hover:bg-red-600 block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;