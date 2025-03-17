import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="Footer_1" className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
      <div id="Footer_2" className="container mx-auto px-4">
        <div id="Footer_3" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div id="Footer_4" className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-gray-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-400" />
              <span>contact@example.com</span>
            </div>
          </div>
          
          <div id="Footer_5" className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/privacy" className="hover:text-gray-300 transition duration-300">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-gray-300 transition duration-300">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-gray-300 transition duration-300">Cookie Policy</Link>
            </div>
          </div>
          
          <div id="Footer_6" className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="http://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="http://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="http://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div id="Footer_7" className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;