import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (response.ok) {
        setStatus({ type: 'success', message: 'Successfully subscribed!' });
        setEmail('');
      } else {
        setStatus({ type: 'error', message: 'Subscription failed. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    }
  };

  return (
    <div id="NewsletterSignup_1" className="max-w-md mx-auto p-8 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 shadow-lg">
      <div className="text-center mb-8">
        <h2 id="NewsletterSignup_2" className="text-3xl font-bold text-gray-800 mb-3">Stay Updated</h2>
        <p id="NewsletterSignup_3" className="text-gray-600">Subscribe to our newsletter for exclusive updates, tips, and special offers!</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            id="NewsletterSignup_4"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
            required
          />
        </div>

        <button
          id="NewsletterSignup_5"
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          Subscribe Now
        </button>

        {status.message && (
          <div
            id="NewsletterSignup_6"
            className={`mt-4 p-3 rounded-lg ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
          >
            {status.message}
          </div>
        )}
      </form>

      <p id="NewsletterSignup_7" className="text-xs text-gray-500 mt-6 text-center">
        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
      </p>
    </div>
  );
};

export default NewsletterSignup;