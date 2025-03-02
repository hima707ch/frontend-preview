import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white pt-12 pb-8" id="Footer_1">
      <div className="container mx-auto px-4" id="Footer_2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8" id="Footer_3">
          <div className="space-y-4" id="Footer_4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/homepage" className="hover:text-blue-400 transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/listingpage" className="hover:text-blue-400 transition duration-300">Listings</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4" id="Footer_5">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Business Ave, City, State 12345</p>
          </div>
          
          <div className="space-y-4" id="Footer_6">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
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
          
          <div className="space-y-4" id="Footer_7">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p>Subscribe to our newsletter for updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md focus:outline-none text-gray-800 w-full"
              />
              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center" id="Footer_8">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;