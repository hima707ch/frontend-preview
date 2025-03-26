import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header id="Header_1" className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <div id="Header_2" className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
                        <img src={images[0]} alt="Logo" className="h-12 w-auto" />
                        <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">PropertyHub</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link id="Header_3" to="/" className="nav-link text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Home</Link>
                        <Link id="Header_4" to="/searchpage" className="nav-link text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Search</Link>
                        <Link id="Header_5" to="/propertyaddpage" className="nav-link px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium">Add Property</Link>
                        <div id="Header_6" className="relative group">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors duration-300">
                                <img src={images[1]} alt="Profile" className="w-8 h-8 rounded-full" />
                            </div>
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 hidden group-hover:block transition-all duration-300">
                                <Link id="Header_7" to="/userprofile" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600">My Profile</Link>
                                <Link id="Header_8" to="/settings" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600">Settings</Link>
                                <button id="Header_9" className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50">Logout</button>
                            </div>
                        </div>
                    </div>

                    <button id="Header_10" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                        </svg>
                    </button>
                </div>

                {isMenuOpen && (
                    <div id="Header_11" className="md:hidden bg-white py-4">
                        <Link to="/" className="block py-2 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-600">Home</Link>
                        <Link to="/searchpage" className="block py-2 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-600">Search</Link>
                        <Link to="/propertyaddpage" className="block py-2 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-600">Add Property</Link>
                        <Link to="/userprofile" className="block py-2 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-600">Profile</Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;