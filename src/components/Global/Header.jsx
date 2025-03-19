import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            fetchUserData(token);
        }
    }, []);

    const fetchUserData = async (token) => {
        try {
            const response = await fetch('api/user/profile', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setUser(null);
        navigate('/');
    };

    return (
        <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
            <nav className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <img id="Header_2" src={images[0]} alt="Logo" className="h-10 w-10 mr-2 rounded-full hover:opacity-80 transition-opacity"/>
                            <span id="Header_3" className="text-white text-2xl font-bold hover:text-gray-200 transition-colors">PropertyHub</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link id="Header_4" to="/" className="text-white hover:text-gray-200 transition-colors font-medium">Home</Link>
                        <Link id="Header_5" to="/properties" className="text-white hover:text-gray-200 transition-colors font-medium">Properties</Link>
                        {isLoggedIn ? (
                            <>
                                <Link id="Header_6" to="/dashboard" className="text-white hover:text-gray-200 transition-colors font-medium">Dashboard</Link>
                                <Link id="Header_7" to="/addproperty" className="text-white hover:text-gray-200 transition-colors font-medium">Add Property</Link>
                                <div id="Header_8" className="relative group">
                                    <button className="flex items-center text-white hover:text-gray-200 transition-colors font-medium">
                                        <img src={user?.avatar || images[1]} alt="Profile" className="h-8 w-8 rounded-full mr-2"/>
                                        {user?.name || 'User'}
                                    </button>
                                    <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-lg shadow-xl hidden group-hover:block">
                                        <Link id="Header_9" to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</Link>
                                        <Link id="Header_10" to="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</Link>
                                        <button id="Header_11" onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link id="Header_12" to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium">Login</Link>
                                <Link id="Header_13" to="/register" className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors font-medium">Register</Link>
                            </>
                        )}
                    </div>

                    <div className="md:hidden">
                        <button id="Header_14" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-gray-200 transition-colors">
                            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div id="Header_15" className="md:hidden mt-4">
                        <div className="flex flex-col space-y-4">
                            <Link to="/" className="text-white hover:text-gray-200 transition-colors font-medium">Home</Link>
                            <Link to="/properties" className="text-white hover:text-gray-200 transition-colors font-medium">Properties</Link>
                            {isLoggedIn ? (
                                <>
                                    <Link to="/dashboard" className="text-white hover:text-gray-200 transition-colors font-medium">Dashboard</Link>
                                    <Link to="/addproperty" className="text-white hover:text-gray-200 transition-colors font-medium">Add Property</Link>
                                    <Link to="/profile" className="text-white hover:text-gray-200 transition-colors font-medium">Profile</Link>
                                    <Link to="/settings" className="text-white hover:text-gray-200 transition-colors font-medium">Settings</Link>
                                    <button onClick={handleLogout} className="text-white hover:text-gray-200 transition-colors font-medium text-left">Logout</button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="text-white hover:text-gray-200 transition-colors font-medium">Login</Link>
                                    <Link to="/register" className="text-white hover:text-gray-200 transition-colors font-medium">Register</Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;