import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="Footer_1" className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div id="Footer_2" className="max-w-7xl mx-auto px-4 py-12">
        <div id="Footer_3" className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div id="Footer_4" className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link>
              <Link to="/about" className="hover:text-blue-400 transition duration-300">About Us</Link>
              <Link to="/services" className="hover:text-blue-400 transition duration-300">Services</Link>
              <Link to="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link>
            </nav>
          </div>
          
          <div id="Footer_5" className="space-y-4">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <div className="space-y-2">
              <p>123 Business Street</p>
              <p>City, State 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@business.com</p>
            </div>
          </div>
          
          <div id="Footer_6" className="space-y-4">
            <h3 className="text-xl font-bold">Business Hours</h3>
            <div className="space-y-2">
              <p>Monday - Friday: 9AM - 6PM</p>
              <p>Saturday: 10AM - 4PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          
          <div id="Footer_7" className="space-y-4">
            <h3 className="text-xl font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div id="Footer_8" className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p>© {currentYear} Your Business Name. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4 text-sm">
            <Link to="/privacy" className="hover:text-blue-400 transition duration-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-400 transition duration-300">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-blue-400 transition duration-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;