import React, { useState } from 'react';

const NewsletterSignUp = () => {
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
    <div id="NewsletterSignUp_1" className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 id="NewsletterSignUp_2" className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Stay Updated with Latest Properties
        </h2>
        <p id="NewsletterSignUp_3" className="mt-4 text-lg text-gray-600">
          Subscribe to our newsletter and never miss out on exclusive property deals, market insights, and real estate tips.
        </p>
        <div className="mt-8">
          <form onSubmit={handleSubmit} className="sm:flex justify-center">
            <div id="NewsletterSignUp_4" className="min-w-0 flex-1">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full px-4 py-3 text-base rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            <div id="NewsletterSignUp_5" className="mt-3 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                className="block w-full px-6 py-3 border border-transparent text-base font-medium rounded-r-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
              >
                Subscribe Now
              </button>
            </div>
          </form>
          {status === 'success' && (
            <p id="NewsletterSignUp_6" className="mt-3 text-sm text-green-600">
              Thank you for subscribing! Check your email for confirmation.
            </p>
          )}
          {status === 'error' && (
            <p id="NewsletterSignUp_7" className="mt-3 text-sm text-red-600">
              Something went wrong. Please try again later.
            </p>
          )}
        </div>
        <p id="NewsletterSignUp_8" className="mt-4 text-sm text-gray-500">
          By subscribing, you agree to our Privacy Policy and Terms of Service.
          We respect your privacy and will never share your information.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignUp;