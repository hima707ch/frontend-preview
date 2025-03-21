import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      // Add logout API call here
      // fetch('/api/logout', { method: 'POST' })
    } else {
      navigate('/login');
    }
  };

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div id="Header_2" className="container mx-auto px-4 py-3">
        <div id="Header_3" className="flex items-center justify-between">
          <Link to="/dashboardmainpage" className="flex items-center space-x-2 transition transform hover:scale-105">
            <img
              id="Header_4"
              src={images[0]}
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />
            <span id="Header_5" className="text-white text-xl font-bold">DashBoard</span>
          </Link>

          <nav id="Header_6" className="flex-1 mx-10">
            <ul id="Header_7" className="flex justify-center space-x-8">
              <li>
                <Link
                  to="/dashboardmainpage"
                  className="text-white hover:text-yellow-200 transition-colors duration-200 font-medium"
                  id="Header_8"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/productspage"
                  className="text-white hover:text-yellow-200 transition-colors duration-200 font-medium"
                  id="Header_9"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/orderspage"
                  className="text-white hover:text-yellow-200 transition-colors duration-200 font-medium"
                  id="Header_10"
                >
                  Orders
                </Link>
              </li>
            </ul>
          </nav>

          <button
            id="Header_11"
            onClick={handleAuthClick}
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium
                     hover:bg-yellow-200 transition-all duration-200 transform hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50"
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;