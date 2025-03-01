import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const EmailList = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    fetch('/api/subscribers')
      .then(res => res.json())
      .then(data => setSubscribers(data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (response.ok) {
        setSubscribed(true);
        setEmail('');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="EmailList_1" className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div id="EmailList_2" className="max-w-3xl mx-auto">
        <div id="EmailList_3" className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600">Join our newsletter and get the latest updates directly in your inbox.</p>
        </div>

        <div id="EmailList_4" className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <div className="mt-1">
                <input
                  id="EmailList_5"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out"
            >
              Subscribe
            </button>
          </form>

          {subscribed && (
            <div id="EmailList_6" className="mt-4 p-4 bg-green-100 rounded-md">
              <p className="text-green-700 text-center">Thank you for subscribing!</p>
            </div>
          )}
        </div>

        <div id="EmailList_7" className="bg-white rounded-lg shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Community</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div id="EmailList_8" className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
              <p className="text-4xl font-bold text-purple-600">{subscribers.length || '5000+'}</p>
              <p className="text-gray-600">Happy Subscribers</p>
            </div>
            <div id="EmailList_9" className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
              <p className="text-4xl font-bold text-purple-600">Weekly</p>
              <p className="text-gray-600">Newsletter Frequency</p>
            </div>
          </div>

          <div id="EmailList_10" className="mt-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">What our subscribers say</h4>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600 italic">"The newsletter keeps me updated with the latest trends and insights. Absolutely love it!"</p>
                <p className="text-gray-700 font-medium mt-2">- Sarah Johnson</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600 italic">"Best decision to subscribe. The content is always relevant and valuable."</p>
                <p className="text-gray-700 font-medium mt-2">- Michael Chen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailList;