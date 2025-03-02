import React, { useState } from 'react';
import axios from 'axios';

const LoginRegisterPrompt = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isLoginMode) {
        const response = await axios.post('/api/login', {
          username: formData.username,
          password: formData.password
        });
        localStorage.setItem('userToken', response.data.token);
        setIsOpen(false);
      } else {
        const response = await axios.post('/api/register', formData);
        setIsLoginMode(true);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div id="LoginRegisterPrompt_1" className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
      >
        Join Now
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div id="LoginRegisterPrompt_2" className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {isLoginMode ? 'Welcome Back' : 'Create Account'}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  id="LoginRegisterPrompt_3"
                  type="text"
                  placeholder="Username"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                />
              </div>

              {!isLoginMode && (
                <div>
                  <input
                    id="LoginRegisterPrompt_4"
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              )}

              <div>
                <input
                  id="LoginRegisterPrompt_5"
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm">{error}</div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                {isLoginMode ? 'Log In' : 'Sign Up'}
              </button>

              <div className="text-center mt-4">
                <button
                  type="button"
                  onClick={() => setIsLoginMode(!isLoginMode)}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {isLoginMode ? 'Need an account? Sign up' : 'Already have an account? Log in'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginRegisterPrompt;