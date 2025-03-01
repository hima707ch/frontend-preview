import React, { useState } from 'react';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <section
      id="CTASection_1"
      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            id="CTASection_2"
            className="text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            Ready to Find Your New Home?
          </h2>
          <p
            id="CTASection_3"
            className="mt-4 max-w-2xl text-xl lg:mx-auto"
          >
            Sign up now for free property alerts and never miss out on your dream home. Limited time offer!
          </p>
        </div>

        <div className="mt-10 sm:flex sm:justify-center">
          <form onSubmit={handleSubmit} className="sm:max-w-xl sm:mx-auto lg:mx-0">
            <div className="sm:flex">
              <div className="min-w-0 flex-1">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="CTASection_4"
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <button
                  id="CTASection_5"
                  type="submit"
                  className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                >
                  Sign Up for Free Alerts
                </button>
              </div>
            </div>
            {message && (
              <p id="CTASection_6" className="mt-3 text-sm text-indigo-100">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
