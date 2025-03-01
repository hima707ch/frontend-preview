import React from 'react';

const LoginButton = () => {
  return (
    <button
      id="LoginButton_1"
      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-6 rounded-full hover:from-purple-600 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2"
      onClick={() => console.log('Login clicked')}
    >
      <svg
        id="LoginButton_2"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
        />
      </svg>
      <span id="LoginButton_3">Login</span>
    </button>
  );
};

export default LoginButton;