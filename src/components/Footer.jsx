import React from 'react';
import images from '../assets/images';

const Footer = () => {
  return (
    <footer id="Footer_1" className="bg-gray-800 text-white py-8">
      <div id="Footer_2" className="container mx-auto flex flex-wrap justify-between">
        <div id="Footer_3" className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 id="Footer_4" className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul id="Footer_5" className="space-y-2">
            <li id="Footer_6"><a href="/about" className="hover:text-gray-300">About</a></li>
            <li id="Footer_7"><a href="/properties" className="hover:text-gray-300">Properties</a></li>
            <li id="Footer_8"><a href="/services" className="hover:text-gray-300">Services</a></li>
            <li id="Footer_9"><a href="/careers" className="hover:text-gray-300">Careers</a></li>
            <li id="Footer_10"><a href="/contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
        <div id="Footer_11" className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 id="Footer_12" className="text-lg font-semibold mb-4">Connect with Us</h3>
          <div id="Footer_13" className="flex space-x-4">
            <a href="#" id="Footer_14">
              <img src={images[0]} alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="#" id="Footer_15">
              <img src={images[1]} alt="Twitter" className="w-8 h-8" />
            </a>
            <a href="#" id="Footer_16">
              <img src={images[2]} alt="Instagram" className="w-8 h-8" />
            </a>
          </div>
        </div>
        <div id="Footer_17" className="w-full md:w-1/3">
          <h3 id="Footer_18" className="text-lg font-semibold mb-4">Newsletter Signup</h3>
          <form id="Footer_19">
            <div id="Footer_20" className="flex items-center border-b border-gray-600 py-2">
              <input
                id="Footer_21"
                className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="email"
                placeholder="Enter your email"
              />
              <button
                id="Footer_22"
                className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div id="Footer_23" className="container mx-auto mt-8">
        <p id="Footer_24" className="text-center text-gray-500 text-sm">
          &copy; 2023 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
