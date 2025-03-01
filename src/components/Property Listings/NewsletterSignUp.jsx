import React, { useState } from 'react';

const NewsletterSignUp = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div id="NewsletterSignUp_1" className="bg-gradient-to-r from-purple-600 to-blue-600 min-h-[400px] flex items-center justify-center px-4">
      <div id="NewsletterSignUp_2" className="bg-white rounded-lg p-8 shadow-2xl max-w-md w-full transform hover:scale-105 transition-transform duration-300">
        <h2 id="NewsletterSignUp_3" className="text-3xl font-bold text-gray-800 mb-2 text-center">Stay Updated!</h2>
        <p id="NewsletterSignUp_4" className="text-gray-600 mb-6 text-center">Subscribe to our newsletter for the latest news, updates, and exclusive offers.</p>
        
        <form id="NewsletterSignUp_5" onSubmit={handleSubmit} className="space-y-4">
          <div id="NewsletterSignUp_6" className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
              required
            />
          </div>
          
          <button
            id="NewsletterSignUp_7"
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Subscribe Now
          </button>
        </form>

        {status === 'success' && (
          <p id="NewsletterSignUp_8" className="mt-4 text-green-600 text-center">Thank you for subscribing!</p>
        )}
        {status === 'error' && (
          <p id="NewsletterSignUp_9" className="mt-4 text-red-600 text-center">Something went wrong. Please try again.</p>
        )}

        <div id="NewsletterSignUp_10" className="mt-6 text-center text-sm text-gray-500">
          <p>By subscribing, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignUp;