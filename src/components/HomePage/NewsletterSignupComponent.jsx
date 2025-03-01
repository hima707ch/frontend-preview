import React, { useState } from 'react';

const NewsletterSignupComponent = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
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
    <div id="NewsletterSignupComponent_1" className="bg-gradient-to-r from-purple-600 to-blue-600 min-h-[400px] flex items-center justify-center px-4">
      <div id="NewsletterSignupComponent_2" className="bg-white rounded-xl p-8 shadow-2xl max-w-md w-full transform hover:scale-105 transition-transform duration-300">
        <h2 id="NewsletterSignupComponent_3" className="text-3xl font-bold text-gray-800 mb-2 text-center">Stay Updated!</h2>
        <p id="NewsletterSignupComponent_4" className="text-gray-600 mb-6 text-center">Subscribe to our newsletter for exclusive updates, tips, and special offers.</p>
        
        <form id="NewsletterSignupComponent_5" onSubmit={handleSubmit} className="space-y-4">
          <div id="NewsletterSignupComponent_6" className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              required
            />
          </div>
          
          <button
            id="NewsletterSignupComponent_7"
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            Subscribe Now
          </button>
        </form>

        {status === 'success' && (
          <p id="NewsletterSignupComponent_8" className="mt-4 text-green-600 text-center font-medium">
            Thank you for subscribing!
          </p>
        )}

        {status === 'error' && (
          <p id="NewsletterSignupComponent_9" className="mt-4 text-red-600 text-center font-medium">
            Something went wrong. Please try again.
          </p>
        )}

        <div id="NewsletterSignupComponent_10" className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignupComponent;