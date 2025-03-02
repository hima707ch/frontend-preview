import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value
        })
      });
      const data = await response.json();
      setUser(data.user);
      setIsLoggedIn(true);
      localStorage.setItem('token', data.token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img id="Header_2" src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
            <div className="ml-6 flex space-x-4">
              <Link
                id="Header_3"
                to="/homepage"
                className={`${location.pathname === '/homepage' ? 'bg-white text-blue-600' : 'text-white'} px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:text-blue-600`}
              >
                Home
              </Link>
              <Link
                id="Header_4"
                to="/listingpage"
                className={`${location.pathname === '/listingpage' ? 'bg-white text-blue-600' : 'text-white'} px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:text-blue-600`}
              >
                Listings
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {!isLoggedIn ? (
              <div id="Header_5" className="flex space-x-4">
                <button
                  className="bg-white text-blue-600 px-6 py-2 rounded-lg transition-all duration-300 hover:bg-blue-100 hover:shadow-lg"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  Login
                </button>
                <Link
                  to="/register"
                  className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:text-blue-600"
                >
                  Register
                </Link>
              </div>
            ) : (
              <div id="Header_6" className="relative">
                <button
                  className="flex items-center space-x-2 text-white hover:text-blue-200"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <img
                    src={images[1]}
                    alt="Profile"
                    className="h-8 w-8 rounded-full border-2 border-white"
                  />
                  <span>{user?.email}</span>
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2">
                    <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Profile</a>
                    <a href="/settings" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Settings</a>
                    <button
                      onClick={() => {
                        setIsLoggedIn(false);
                        setUser(null);
                        localStorage.removeItem('token');
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;