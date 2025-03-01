import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'NavigationMenu_1', title: 'Home', path: '/' },
    { id: 'NavigationMenu_2', title: 'Products', path: '/products' },
    { id: 'NavigationMenu_3', title: 'Services', path: '/services' },
    { id: 'NavigationMenu_4', title: 'About Us', path: '/about' },
    { id: 'NavigationMenu_5', title: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div id="NavigationMenu_6" className="text-white font-bold text-2xl">Logo</div>
          
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                id={item.id}
                className="text-white hover:text-yellow-300 transition-colors duration-300 font-medium text-lg"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <button
            id="NavigationMenu_7"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div id="NavigationMenu_8" className="md:hidden mt-4 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="block text-white hover:bg-white/10 rounded-lg p-2 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationMenu;