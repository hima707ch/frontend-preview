import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import images from '../assets/images';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/${authMode}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        if (authMode === 'login') {
          localStorage.setItem('token', data.token);
          setIsLoggedIn(true);
        }
        setShowAuthModal(false);
        setFormData({ username: '', password: '' });
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('Authentication failed. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const fetchProperties = async () => {
    try {
      const response = await fetch('/properties');
      if (!response.ok) {
        throw new Error('Failed to fetch properties');
      }
      const data = await response.json();
      setProperties(data);
      setError(null);
    } catch (error) {
      setError('Error fetching properties. Please try again.');
    }
  };

  return (
    <header
      id="Header_1"
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 mb-8 ${isSticky ? 'bg-white dark:bg-gray-800 shadow-md' : 'bg-transparent'} ${isDarkMode ? 'dark' : ''}`}
    >
      <div className="container mx-auto px-4 py-6 mb-8 flex items-center justify-between">
        <div className="flex items-center">
          <img src={images[0]} alt="Logo" className="h-10 w-auto mr-4" />
          <span className="text-xl font-bold text-gray-800 dark:text-white">Real Estate</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white" id="Header_2">Home</a>
          <a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white" id="Header_3">About Us</a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
            onClick={fetchProperties}
            id="Header_4"
          >
            Properties
          </a>
          <a href="/services" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white" id="Header_5">Services</a>
          <a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white" id="Header_6">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            id="Header_7"
          >
            {isDarkMode ? <FiSun className="h-6 w-6 text-white" /> : <FiMoon className="h-6 w-6 text-gray-600" />}
          </button>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              Login/Register
            </button>
          )}
        </div>
      </div>

      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">{authMode === 'login' ? 'Login' : 'Register'}</h2>
            <form onSubmit={handleAuth}>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              >
                {authMode === 'login' ? 'Login' : 'Register'}
              </button>
            </form>
            <p className="mt-4 text-center">
              {authMode === 'login' ? "Don't have an account? " : 'Already have an account? '}
              <button
                className="text-blue-600 hover:text-blue-700"
                onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
              >
                {authMode === 'login' ? 'Register' : 'Login'}
              </button>
            </p>
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowAuthModal(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4 mb-8" role="alert" id="Header_9">
          <strong className="font-bold">Error!</strong> {error}
        </div>
      )}
      {properties.length > 0 && (
        <div className="container mx-auto px-4 py-8 mb-8" id="Header_10">
          <h2 className="text-2xl font-bold mb-4">Properties</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <li key={property.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden" id={`Header_${property.id}`}>
                <img src={images[property.id % images.length]} alt={property.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{property.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;