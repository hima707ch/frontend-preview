import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterComponent = () => {
  return (
    <footer id="FooterComponent_1" className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div id="FooterComponent_2" className="max-w-7xl mx-auto px-4 py-12">
        <div id="FooterComponent_3" className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div id="FooterComponent_4" className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Company Name</h3>
            <p className="text-gray-300">Making the world a better place through innovative solutions.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300"><FaInstagram size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300"><FaLinkedin size={24} /></a>
            </div>
          </div>
          <div id="FooterComponent_5" className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div id="FooterComponent_6" className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Cloud Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Consulting</a></li>
            </ul>
          </div>
          <div id="FooterComponent_7" className="space-y-4">
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <p className="text-gray-300">Subscribe to our newsletter for updates</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div id="FooterComponent_8" className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>© 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;