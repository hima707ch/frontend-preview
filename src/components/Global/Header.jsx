import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, []);

  const handleLogin = async (credentials) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setIsAuthenticated(true);
      setUser(data.user);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
    navigate('/');
  };

  return (
    <header id="Header_1" className="fixed top-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div id="Header_2" className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
              <span className="ml-3 text-xl font-bold text-white hover:text-gray-200 transition duration-300">
                YourBrand
              </span>
            </Link>
          </div>

          <div id="Header_3" className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-gray-200 transition duration-300 font-medium">
              Home
            </Link>
            <Link to="/products" className="text-white hover:text-gray-200 transition duration-300 font-medium">
              Products
            </Link>
            <Link to="/about" className="text-white hover:text-gray-200 transition duration-300 font-medium">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-200 transition duration-300 font-medium">
              Contact
            </Link>
          </div>

          <div id="Header_4" className="flex items-center space-x-4">
            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-white hover:bg-white hover:text-blue-600 rounded-full transition duration-300 border border-white"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-white text-blue-600 hover:bg-gray-100 rounded-full transition duration-300"
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <span className="text-white">{user?.username}</span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded-full transition duration-300"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;