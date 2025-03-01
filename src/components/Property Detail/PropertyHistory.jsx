import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const PropertyHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchPropertyHistory();
  }, []);

  const fetchPropertyHistory = async () => {
    try {
      const response = await fetch('/api/property-history');
      const data = await response.json();
      setHistory(data);
    } catch (error) {
      console.error('Error fetching property history:', error);
      // Fallback data
      setHistory([
        {
          id: 1,
          propertyName: 'Sunset Villa',
          date: '2023-01-15',
          price: 850000,
          status: 'Sold',
          image: images[0]
        },
        {
          id: 2,
          propertyName: 'Ocean View Apartments',
          date: '2023-03-22',
          price: 650000,
          status: 'Price Changed',
          image: images[1]
        },
        {
          id: 3,
          propertyName: 'Mountain Lodge',
          date: '2023-06-10',
          price: 1200000,
          status: 'Listed',
          image: images[2]
        }
      ]);
    }
  };

  return (
    <div id="PropertyHistory_1" className="container mx-auto px-4 py-8">
      <h2 id="PropertyHistory_2" className="text-3xl font-bold text-gray-800 mb-6 text-center">Property History</h2>
      <div id="PropertyHistory_3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {history.map((item) => (
          <div
            key={item.id}
            id={`PropertyHistory_${item.id + 3}`}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <div className="relative h-48">
              <img
                src={item.image}
                alt={item.propertyName}
                className="w-full h-full object-cover"
              />
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${item.status === 'Sold' ? 'bg-green-500' : item.status === 'Listed' ? 'bg-blue-500' : 'bg-yellow-500'} text-white`}>
                {item.status}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.propertyName}</h3>
              <div className="flex justify-between items-center text-gray-600">
                <span>Date: {new Date(item.date).toLocaleDateString()}</span>
                <span className="text-lg font-bold text-gray-800">${item.price.toLocaleString()}</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyHistory;