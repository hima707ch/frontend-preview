import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setStatus('Success! Thank you for subscribing.');
        setEmail('');
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Error occurred. Please try again later.');
    }
  };

  return (
    <div id="NewsletterSignup_1" className="min-h-[400px] flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
      <div id="NewsletterSignup_2" className="max-w-md w-full mx-4 p-8 bg-white rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <div id="NewsletterSignup_3" className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Stay Updated</h2>
          <p className="text-gray-600">Subscribe to our newsletter for the latest updates, news, and exclusive offers!</p>
        </div>
        <form id="NewsletterSignup_4" onSubmit={handleSubmit} className="space-y-4">
          <div id="NewsletterSignup_5" className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Subscribe Now
          </button>
          {status && (
            <p id="NewsletterSignup_6" className={`text-center mt-4 ${status.includes('Success') ? 'text-green-600' : 'text-red-600'}`}>
              {status}
            </p>
          )}
        </form>
        <div id="NewsletterSignup_7" className="mt-6 text-center text-sm text-gray-500">
          <p>By subscribing, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;