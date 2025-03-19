import React from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8" id="Footer_1">
          <div className="space-y-4">
            <h3 className="text-xl font-bold" id="Footer_2">About Us</h3>
            <p className="text-gray-400" id="Footer_3">We are dedicated to providing the best service to our customers with innovative solutions and exceptional support.</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold" id="Footer_4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-300" id="Footer_5">Privacy Policy</Link></li>
              <li><Link to="/tos" className="text-gray-400 hover:text-blue-400 transition-colors duration-300" id="Footer_6">Terms of Service</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300" id="Footer_7">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold" id="Footer_8">Connect With Us</h3>
            <div className="flex space-x-4" id="Footer_9">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold" id="Footer_10">Newsletter</h3>
            <form className="space-y-2" id="Footer_11">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center" id="Footer_12">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;