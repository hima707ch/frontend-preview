import React from 'react';
import images from '../assets/images';

const Header = () => {
  return (
    <header id="Header_1" className="bg-white shadow-md">
      <div id="Header_2" className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div id="Header_3" className="flex items-center">
          <img id="Header_4" src={images[0]} alt="Logo" className="h-10 w-auto" />
          <h1 id="Header_5" className="text-xl font-bold ml-2">Property Manager</h1>
        </div>
        <nav id="Header_6">
          <ul id="Header_7" className="flex space-x-6">
            <li id="Header_8"><a href="/" className="hover:text-blue-600">Dashboard</a></li>
            <li id="Header_9"><a href="/add" className="hover:text-blue-600">Add Property</a></li>
            <li id="Header_10"><a href="/profile" className="hover:text-blue-600">Profile</a></li>
            <li id="Header_11"><button className="text-red-600 hover:text-red-800">Logout</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;