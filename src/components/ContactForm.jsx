// Here's the enhanced version of the ContactForm component with improved visual styling and animations:

import React from 'react';

const ContactForm = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 tracking-tight">
          Contact Us
        </h2>
        <form className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 transition duration-300 ease-in-out transform hover:text-blue-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-200 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 transition duration-300 ease-in-out transform hover:text-blue-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-200 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 transition duration-300 ease-in-out transform hover:text-blue-600">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-200 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
              rows="5"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-8 py-3 rounded-md font-semibold tracking-wide hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;