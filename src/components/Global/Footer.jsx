import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="Footer_1" className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300">
      <div id="Footer_2" className="max-w-7xl mx-auto px-4 py-8">
        <div id="Footer_3" className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-700">
          <div id="Footer_4" className="space-y-4">
            <h3 className="text-xl font-semibold text-white">About Us</h3>
            <p className="text-sm">We are dedicated to providing exceptional services and innovative solutions to meet your needs.</p>
          </div>
          
          <div id="Footer_5" className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-sm hover:text-white transition duration-300">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm hover:text-white transition duration-300">Terms of Service</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-white transition duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-white transition duration-300">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div id="Footer_6" className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div id="Footer_7" className="pt-8 text-center">
          <p className="text-sm">&copy; {currentYear} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;