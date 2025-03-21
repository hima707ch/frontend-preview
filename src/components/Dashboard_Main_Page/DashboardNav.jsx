import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardNav = () => {
  const navigate = useNavigate();

  return (
    <nav id="DashboardNav_1" className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 id="DashboardNav_2" className="text-xl font-bold text-indigo-600">PropertyHub</h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <button
                id="DashboardNav_3"
                onClick={() => navigate('/properties')}
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300"
              >
                Properties
              </button>
              <button
                id="DashboardNav_4"
                onClick={() => navigate('/add-property')}
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300"
              >
                Add Property
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;