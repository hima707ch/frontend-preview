import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div id="Footer_1" className="space-y-4">
            <h3 className="text-xl font-bold">About Us</h3>
            <p className="text-gray-300">We are dedicated to providing the best services and products to our customers. Your satisfaction is our priority.</p>
          </div>
          <div id="Footer_2" className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div id="Footer_3" className="space-y-4">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>123 Business Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>
          <div id="Footer_4" className="space-y-4">
            <h3 className="text-xl font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300"><FaInstagram size={24} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div id="Footer_5" className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>© 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;