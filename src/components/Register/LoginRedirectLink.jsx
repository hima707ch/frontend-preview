import React from 'react';
import { Link } from 'react-router-dom';

const LoginRedirectLink = () => {
  return (
    <div id="LoginRedirectLink_1" className="flex flex-col items-center justify-center min-h-[200px] p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md">
      <h2 id="LoginRedirectLink_2" className="text-2xl font-semibold text-gray-800 mb-4">Access Required</h2>
      <p id="LoginRedirectLink_3" className="text-gray-600 text-center mb-6">Please log in to access this feature</p>
      <Link
        id="LoginRedirectLink_4"
        to="/login"
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Go to Login
      </Link>
      <p id="LoginRedirectLink_5" className="mt-4 text-sm text-gray-500">
        New user?{' '}
        <Link
          id="LoginRedirectLink_6"
          to="/signup"
          className="text-blue-600 hover:text-blue-800 underline transition-colors duration-300"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default LoginRedirectLink;