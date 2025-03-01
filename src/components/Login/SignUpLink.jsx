import React from 'react';
import { Link } from 'react-router-dom';

const SignUpLink = () => {
  return (
    <div id="SignUpLink_1" className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 max-w-md mx-auto my-8">
      <h2 id="SignUpLink_2" className="text-2xl font-bold mb-4 text-gray-800">Join Our Community</h2>
      <p id="SignUpLink_3" className="text-gray-600 text-center mb-6">Create an account to unlock exclusive features and personalized experience.</p>
      <Link id="SignUpLink_4" to="/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
        Sign Up Now
      </Link>
      <p id="SignUpLink_5" className="mt-4 text-sm text-gray-500">
        Already have an account?
        <Link id="SignUpLink_6" to="/login" className="text-purple-600 hover:text-purple-800 ml-1 font-medium">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default SignUpLink;