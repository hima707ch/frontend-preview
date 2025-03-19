import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import images from '../assets/images';

const Header = () => {
  const { isAuthenticated, userRole, logout } = useAuth();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <header id="Header_1" className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img id="Header_2" src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
              <span id="Header_3" className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>RealEstate</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link id="Header_4" to="/" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors duration-200`}>Home</Link>
            <Link id="Header_5" to="/properties" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors duration-200`}>Properties</Link>
            
            {isAuthenticated ? (
              <>
                <Link id="Header_6" to="/dashboard" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors duration-200`}>Dashboard</Link>
                {userRole === 'seller' && (
                  <Link id="Header_7" to="/addproperty" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors duration-200`}>Add Property</Link>
                )}
                <button
                  id="Header_8"
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link id="Header_9" to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">Login</Link>
                <Link id="Header_10" to="/register" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">Register</Link>
              </>
            )}
          </div>

          <button
            id="Header_11"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div id="Header_12" className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-800 hover:text-blue-500">Home</Link>
              <Link to="/properties" className="text-gray-800 hover:text-blue-500">Properties</Link>
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" className="text-gray-800 hover:text-blue-500">Dashboard</Link>
                  {userRole === 'seller' && (
                    <Link to="/addproperty" className="text-gray-800 hover:text-blue-500">Add Property</Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg w-full"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center">Login</Link>
                  <Link to="/register" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center">Register</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;