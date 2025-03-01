import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const NavigationSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { id: 'NavigationSidebar_1', title: 'Dashboard', icon: '📊', path: '/' },
    { id: 'NavigationSidebar_2', title: 'Analytics', icon: '📈', path: '/analytics' },
    { id: 'NavigationSidebar_3', title: 'Projects', icon: '📁', path: '/projects' },
    { id: 'NavigationSidebar_4', title: 'Messages', icon: '💬', path: '/messages' },
    { id: 'NavigationSidebar_5', title: 'Settings', icon: '⚙️', path: '/settings' }
  ];

  return (
    <div
      className={`${isExpanded ? 'w-64' : 'w-20'} h-screen bg-gradient-to-b from-indigo-600 to-indigo-800 text-white transition-all duration-300 ease-in-out fixed left-0 top-0`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between">
          <img
            src={images[0]}
            alt="Logo"
            className="w-12 h-12 rounded-full"
            id="NavigationSidebar_6"
          />
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-lg hover:bg-indigo-500 transition-colors"
            id="NavigationSidebar_7"
          >
            {isExpanded ? '◀' : '▶'}
          </button>
        </div>
      </div>

      <nav className="mt-8">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="flex items-center px-4 py-3 hover:bg-indigo-500 transition-colors"
          >
            <span className="text-xl" id={item.id}>{item.icon}</span>
            {isExpanded && (
              <span className="ml-4 font-medium">{item.title}</span>
            )}
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-0 w-full p-4">
        <div
          className="flex items-center space-x-4 hover:bg-indigo-500 p-3 rounded-lg cursor-pointer transition-colors"
          id="NavigationSidebar_8"
        >
          <img
            src={images[1]}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          {isExpanded && (
            <div>
              <h4 className="font-medium">John Doe</h4>
              <p className="text-sm text-indigo-200">Admin</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationSidebar;