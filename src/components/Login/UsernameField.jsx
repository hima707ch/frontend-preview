import React, { useState } from 'react';

const UsernameField = () => {
  const [username, setUsername] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');

  const validateUsername = (value) => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    return usernameRegex.test(value);
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    
    if (value.length === 0) {
      setIsValid(true);
      setMessage('');
    } else if (!validateUsername(value)) {
      setIsValid(false);
      setMessage('Username must be 3-20 characters long and can only contain letters, numbers, and underscores');
    } else {
      setIsValid(true);
      setMessage('Username is available!');
    }
  };

  return (
    <div id="UsernameField_1" className="w-full max-w-md mx-auto p-6">
      <div className="relative">
        <input
          id="UsernameField_2"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter username"
          className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors duration-300
            ${isValid ? 'border-gray-200 focus:border-blue-500' : 'border-red-500 focus:border-red-600'}
            bg-white hover:bg-gray-50 focus:bg-white
            text-gray-700 placeholder-gray-400`}
        />
        <div
          id="UsernameField_3"
          className={`mt-2 text-sm ${isValid ? 'text-green-600' : 'text-red-600'}
            transition-all duration-300 ${message ? 'opacity-100' : 'opacity-0'}`}
        >
          {message}
        </div>
        <div
          id="UsernameField_4"
          className={`absolute right-3 top-3 transition-all duration-300
            ${username.length > 0 ? 'opacity-100' : 'opacity-0'}`}
        >
          {isValid ? (
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsernameField;