import React from 'react';
import images from '../assets/images';

const CallToAction = () => {
  const handleSubscribe = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (response.ok) {
        alert('Successfully subscribed!');
        e.target.reset();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div id="CallToAction_1" className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 id="CallToAction_2" className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Ready to transform your business?
            </h2>
            <p id="CallToAction_3" className="mt-5 text-xl text-gray-100">
              Join thousands of satisfied customers who have already taken their business to the next level with our innovative solutions.
            </p>
          </div>
          <div className="mt-10 lg:mt-0 lg:ml-8">
            <form id="CallToAction_4" onSubmit={handleSubscribe} className="sm:flex">
              <div className="min-w-0 flex-1">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="CallToAction_5"
                  type="email"
                  name="email"
                  className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-3">
                <button
                  id="CallToAction_6"
                  type="submit"
                  className="block w-full rounded-md border border-transparent px-5 py-3 bg-white text-base font-medium text-purple-600 shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 sm:px-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            </form>
            <p id="CallToAction_7" className="mt-3 text-sm text-gray-300">
              Join now and get 30 days free trial. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;