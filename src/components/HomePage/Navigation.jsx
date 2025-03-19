import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const isLoggedIn = localStorage.getItem('token');

  return (
    <nav className="bg-white shadow-lg" id="Navigation_1">
      <div className="container mx-auto px-4" id="Navigation_2">
        <div className="flex justify-between items-center h-16" id="Navigation_3">
          <Link to="/" className="text-2xl font-bold text-gray-800" id="Navigation_4">PropertyHub</Link>
          <div className="flex space-x-4" id="Navigation_5">
            <Link to="/" className="text-gray-600 hover:text-gray-900" id="Navigation_6">Home</Link>
            {isLoggedIn ? (
              <Link to="/dashboard" className="text-gray-600 hover:text-gray-900" id="Navigation_7">Dashboard</Link>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-gray-900" id="Navigation_8">Login</Link>
                <Link to="/register" className="text-gray-600 hover:text-gray-900" id="Navigation_9">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;