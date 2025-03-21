import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links Section */}
          <div id="Footer_1" className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4 text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition duration-300">FAQ</Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-300 hover:text-white transition duration-300">Help Center</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition duration-300">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div id="Footer_2" className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4 text-gray-200">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div id="Footer_3" className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-bold mb-4 text-gray-200">Newsletter</h3>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div id="Footer_4" className="text-center mt-8 pt-4 border-t border-gray-700">
          <p className="text-gray-400">
            © {currentYear} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;