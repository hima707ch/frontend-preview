import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/listings?search=${searchQuery}`);
    setSearchQuery('');
  };

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg fixed w-full top-0 z-50">
      <div id="Header_2" className="container mx-auto px-4 py-3">
        <div id="Header_3" className="flex items-center justify-between">
          <Link to="/home" className="flex items-center">
            <img id="Header_4" src={images[0]} alt="Logo" className="h-12 w-auto hover:opacity-80 transition-opacity duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <nav id="Header_5" className="hidden md:flex items-center space-x-8">
            <Link to="/home" className="text-white hover:text-blue-200 transition-colors duration-300 font-semibold">Home</Link>
            <Link to="/listings" className="text-white hover:text-blue-200 transition-colors duration-300 font-semibold">Listings</Link>
            <Link to="/login" className="text-white hover:text-blue-200 transition-colors duration-300 font-semibold">Login</Link>
            <Link to="/register" className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors duration-300 font-semibold">Register</Link>
          </nav>

          {/* Search Bar */}
          <form id="Header_6" onSubmit={handleSearch} className="hidden md:flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search properties..."
              className="px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-300 w-64 transition-all duration-300"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-r-full hover:bg-blue-400 transition-colors duration-300"
            >
              Search
            </button>
          </form>

          {/* Mobile Menu Button */}
          <button
            id="Header_7"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="Header_8" className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/home" className="text-white hover:text-blue-200 transition-colors duration-300">Home</Link>
              <Link to="/listings" className="text-white hover:text-blue-200 transition-colors duration-300">Listings</Link>
              <Link to="/login" className="text-white hover:text-blue-200 transition-colors duration-300">Login</Link>
              <Link to="/register" className="text-white hover:text-blue-200 transition-colors duration-300">Register</Link>
              <form onSubmit={handleSearch} className="flex">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search properties..."
                  className="px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-400 transition-colors duration-300"
                >
                  Search
                </button>
              </form>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;