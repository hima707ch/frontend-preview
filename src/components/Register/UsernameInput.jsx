import React, { useState } from 'react';

const UsernameInput = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.length < 3) {
      setError('Username must be at least 3 characters long');
      setSuccess(false);
      return;
    }
    try {
      const response = await fetch('/api/check-username', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });
      const data = await response.json();
      if (data.available) {
        setSuccess(true);
        setError('');
      } else {
        setError('Username is already taken');
        setSuccess(false);
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
      setSuccess(false);
    }
  };

  return (
    <div id="UsernameInput_1" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100">
      <div id="UsernameInput_2" className="bg-white p-8 rounded-xl shadow-lg w-96 transform transition-all hover:scale-105">
        <h2 id="UsernameInput_3" className="text-3xl font-bold text-center mb-6 text-indigo-600">Choose Username</h2>
        <form id="UsernameInput_4" onSubmit={handleSubmit} className="space-y-4">
          <div id="UsernameInput_5" className="relative">
            <input
              id="UsernameInput_6"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-indigo-200 focus:border-indigo-500 focus:outline-none transition-colors"
              placeholder="Enter username"
            />
            <span id="UsernameInput_7" className="absolute right-3 top-3 text-gray-400">
              @user
            </span>
          </div>
          {error && (
            <p id="UsernameInput_8" className="text-red-500 text-sm mt-2 animate-pulse">
              {error}
            </p>
          )}
          {success && (
            <p id="UsernameInput_9" className="text-green-500 text-sm mt-2 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Username is available!
            </p>
          )}
          <button
            id="UsernameInput_10"
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Check Availability
          </button>
        </form>
        <p id="UsernameInput_11" className="text-center text-gray-500 text-sm mt-4">
          Username must be unique and at least 3 characters long
        </p>
      </div>
    </div>
  );
};

export default UsernameInput;