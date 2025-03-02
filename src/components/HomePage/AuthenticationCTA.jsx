import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AuthenticationCTA = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('login');
  const [userData, setUserData] = useState({ username: '', password: '' });
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', userData);
      setUser(response.data);
      setIsLoggedIn(true);
      setShowModal(false);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div id="AuthenticationCTA_1" className="relative">
      {!isLoggedIn ? (
        <div id="AuthenticationCTA_2" className="flex space-x-4">
          <button
            onClick={() => { setShowModal(true); setModalType('login'); }}
            className="px-6 py-2 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Login
          </button>
          <button
            onClick={() => { setShowModal(true); setModalType('register'); }}
            className="px-6 py-2 text-blue-600 border-2 border-blue-500 rounded-lg hover:bg-blue-50 transition-all duration-300"
          >
            Register
          </button>
        </div>
      ) : (
        <div id="AuthenticationCTA_3" className="flex items-center space-x-4">
          <span className="text-gray-700">Welcome, {user?.username}!</span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-red-600 hover:text-red-700 transition-colors duration-300"
          >
            Logout
          </button>
        </div>
      )}

      {showModal && (
        <div id="AuthenticationCTA_4" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-96 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {modalType === 'login' ? 'Login' : 'Register'}
            </h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
              >
                {modalType === 'login' ? 'Login' : 'Create Account'}
              </button>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="w-full py-2 mt-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthenticationCTA;