import React from 'react';
import { FiSearch, FiShoppingCart, FiHeart, FiUser } from 'react-icons/fi';

const QuickActions = () => {
  const actions = [
    { id: 'QuickActions_1', icon: <FiSearch className='w-6 h-6' />, label: 'Search', color: 'bg-blue-500' },
    { id: 'QuickActions_2', icon: <FiShoppingCart className='w-6 h-6' />, label: 'Cart', color: 'bg-green-500' },
    { id: 'QuickActions_3', icon: <FiHeart className='w-6 h-6' />, label: 'Wishlist', color: 'bg-red-500' },
    { id: 'QuickActions_4', icon: <FiUser className='w-6 h-6' />, label: 'Profile', color: 'bg-purple-500' }
  ];

  return (
    <div id='QuickActions_5' className='fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-2xl p-2'>
      <div className='flex space-x-2'>
        {actions.map((action) => (
          <button
            key={action.id}
            id={action.id}
            className={`${action.color} hover:scale-110 transform transition-all duration-300 text-white p-3 rounded-full flex flex-col items-center justify-center`}
          >
            {action.icon}
            <span className='text-xs mt-1'>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;