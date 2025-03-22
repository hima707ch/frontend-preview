import React from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12" id="Footer_1">
            <div className="container mx-auto px-4" id="Footer_2">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8" id="Footer_3">
                    <div className="space-y-4" id="Footer_4">
                        <h3 className="text-xl font-bold mb-4">About Us</h3>
                        <p className="text-gray-300">We are dedicated to providing the best service to our customers with innovation and excellence.</p>
                    </div>
                    <div className="space-y-4" id="Footer_5">
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-gray-300 hover:text-white transition duration-300">About Us</Link></li>
                            <li><Link to="/privacy" className="text-gray-300 hover:text-white transition duration-300">Privacy Policy</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact</Link></li>
                            <li><Link to="/sitemap" className="text-gray-300 hover:text-white transition duration-300">Site Map</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4" id="Footer_6">
                        <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>Email: info@example.com</li>
                            <li>Phone: +1 234 567 890</li>
                            <li>Address: 123 Street, City, Country</li>
                        </ul>
                    </div>
                    <div className="space-y-4" id="Footer_7">
                        <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition duration-300">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center" id="Footer_8">
                    <p className="text-gray-400">&copy; 2024 Your Company. All rights reserved.</p>
                    <div className="flex justify-center space-x-4 mt-4" id="Footer_9">
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;