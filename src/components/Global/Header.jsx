import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await fetch('/api/auth/logout', {
                method: 'POST',
                credentials: 'include'
            });
            if (response.ok) {
                setIsAuthenticated(false);
                navigate('/loginpage');
            }
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <header id="Header_1" className="bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg">
            <nav className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <div id="Header_2" className="flex items-center">
                        <Link to="/" className="flex items-center space-x-3">
                            <img src={images[0]} alt="Logo" className="h-12 w-12 rounded-full transition-transform hover:scale-110" />
                            <span className="text-2xl font-bold text-white hover:text-blue-200">PropertyHub</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8" id="Header_3">
                        <Link to="/" className="text-white hover:text-blue-200 transition-colors duration-200 font-semibold">Home</Link>
                        <Link to="/propertiespage" className="text-white hover:text-blue-200 transition-colors duration-200 font-semibold">Properties</Link>
                        {isAuthenticated && (
                            <Link to="/dashboard" className="text-white hover:text-blue-200 transition-colors duration-200 font-semibold">Dashboard</Link>
                        )}
                        {isAuthenticated && (
                            <Link to="/admin" className="text-white hover:text-blue-200 transition-colors duration-200 font-semibold">Admin Panel</Link>
                        )}
                    </div>

                    <div className="hidden md:flex items-center space-x-4" id="Header_4">
                        {!isAuthenticated ? (
                            <>
                                <Link to="/loginpage" className="bg-white text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-200 font-semibold">Login</Link>
                                <Link to="/registrationpage" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-semibold">Register</Link>
                            </>
                        ) : (
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 font-semibold"
                            >
                                Logout
                            </button>
                        )}
                    </div>

                    <button
                        id="Header_5"
                        className="md:hidden text-white hover:text-blue-200"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {isMenuOpen && (
                    <div id="Header_6" className="md:hidden mt-4 space-y-4">
                        <Link to="/" className="block text-white hover:text-blue-200 transition-colors duration-200">Home</Link>
                        <Link to="/propertiespage" className="block text-white hover:text-blue-200 transition-colors duration-200">Properties</Link>
                        {isAuthenticated && (
                            <>
                                <Link to="/dashboard" className="block text-white hover:text-blue-200 transition-colors duration-200">Dashboard</Link>
                                <Link to="/admin" className="block text-white hover:text-blue-200 transition-colors duration-200">Admin Panel</Link>
                            </>
                        )}
                        {!isAuthenticated ? (
                            <div className="space-y-2">
                                <Link to="/loginpage" className="block bg-white text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-center">Login</Link>
                                <Link to="/registrationpage" className="block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 text-center">Register</Link>
                            </div>
                        ) : (
                            <button
                                onClick={handleLogout}
                                className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
                            >
                                Logout
                            </button>
                        )}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;