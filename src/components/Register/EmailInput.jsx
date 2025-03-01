import React, { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      try {
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        if (response.ok) {
          setMessage('Thank you for subscribing!');
          setEmail('');
        }
      } catch (error) {
        setMessage('Something went wrong. Please try again.');
      }
    } else {
      setIsValid(false);
      setMessage('Please enter a valid email address');
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    setIsValid(true);
    setMessage('');
  };

  return (
    <div id="EmailInput_1" className="max-w-md mx-auto p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="email" id="EmailInput_2" className="text-lg font-semibold text-gray-700 mb-2">
            Subscribe to our Newsletter
          </label>
          <div className="relative">
            <input
              id="EmailInput_3"
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 ${isValid ? 'border-gray-300' : 'border-red-500'}`}
            />
            <button
              id="EmailInput_4"
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300"
            >
              Subscribe
            </button>
          </div>
          {message && (
            <p
              id="EmailInput_5"
              className={`mt-2 text-sm ${isValid ? 'text-green-600' : 'text-red-600'}`}
            >
              {message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default EmailInput;