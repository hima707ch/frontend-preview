import React from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const NavigationCards = () => {
  const navItems = [
    { title: 'Products', path: '/products', icon: images[0], description: 'Manage your product inventory' },
    { title: 'Orders', path: '/orders', icon: images[1], description: 'View and manage customer orders' }
  ];

  return (
    <div id="NavigationCards_1" className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {navItems.map((item, index) => (
        <Link 
          key={index}
          to={item.path}
          id={`NavigationCards_${index + 2}`}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex items-center mb-4">
            <img 
              src={item.icon} 
              alt={item.title}
              className="w-12 h-12 object-contain mr-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
          </div>
          <p className="text-gray-600">{item.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default NavigationCards;