import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="Footer_1" className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div id="Footer_2" className="max-w-7xl mx-auto px-4 py-8">
        <div id="Footer_3" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div id="Footer_4" className="space-y-4">
            <h3 id="Footer_5" className="text-xl font-bold">Company</h3>
            <ul id="Footer_6" className="space-y-2">
              <li id="Footer_7" className="hover:text-blue-400 transition duration-300">
                <Link to="/about">About Us</Link>
              </li>
              <li id="Footer_8" className="hover:text-blue-400 transition duration-300">
                <Link to="/careers">Careers</Link>
              </li>
              <li id="Footer_9" className="hover:text-blue-400 transition duration-300">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          
          <div id="Footer_10" className="space-y-4">
            <h3 id="Footer_11" className="text-xl font-bold">Support</h3>
            <ul id="Footer_12" className="space-y-2">
              <li id="Footer_13" className="hover:text-blue-400 transition duration-300">
                <Link to="/help">Help Center</Link>
              </li>
              <li id="Footer_14" className="hover:text-blue-400 transition duration-300">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li id="Footer_15" className="hover:text-blue-400 transition duration-300">
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div id="Footer_16" className="space-y-4">
            <h3 id="Footer_17" className="text-xl font-bold">Legal</h3>
            <ul id="Footer_18" className="space-y-2">
              <li id="Footer_19" className="hover:text-blue-400 transition duration-300">
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li id="Footer_20" className="hover:text-blue-400 transition duration-300">
                <Link to="/terms">Terms of Service</Link>
              </li>
              <li id="Footer_21" className="hover:text-blue-400 transition duration-300">
                <Link to="/cookies">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div id="Footer_22" className="mt-8 pt-8 border-t border-gray-700">
          <div id="Footer_23" className="flex flex-col md:flex-row justify-between items-center">
            <p id="Footer_24" className="text-sm text-gray-400">
              © {currentYear} Your Company. All rights reserved.
            </p>
            <div id="Footer_25" className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://facebook.com" id="Footer_26" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" id="Footer_27" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" id="Footer_28" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;