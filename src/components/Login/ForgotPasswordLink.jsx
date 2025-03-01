import React, { useState } from 'react';
import axios from 'axios';

const ForgotPasswordLink = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('/api/forgot-password', { email });
      setMessage('Password reset link sent to your email!');
      setEmail('');
    } catch (error) {
      setMessage('Error sending reset link. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div id="ForgotPasswordLink_1" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div id="ForgotPasswordLink_2" className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full transform transition-all hover:scale-105">
        <h2 id="ForgotPasswordLink_3" className="text-3xl font-bold text-center mb-6 text-gray-800">Forgot Password?</h2>
        <p id="ForgotPasswordLink_4" className="text-gray-600 text-center mb-8">Enter your email address and we'll send you a link to reset your password.</p>
        
        <form id="ForgotPasswordLink_5" onSubmit={handleSubmit} className="space-y-6">
          <div id="ForgotPasswordLink_6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              id="ForgotPasswordLink_7"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <button
            id="ForgotPasswordLink_8"
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50"
          >
            {isLoading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
        
        {message && (
          <div id="ForgotPasswordLink_9" className={`mt-4 p-3 rounded-lg text-center ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {message}
          </div>
        )}
        
        <div id="ForgotPasswordLink_10" className="mt-6 text-center">
          <a href="/login" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordLink;