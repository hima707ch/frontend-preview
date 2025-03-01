import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const RecentViews = () => {
  const [recentItems, setRecentItems] = useState([]);

  useEffect(() => {
    const fetchRecentViews = async () => {
      try {
        const response = await fetch('/api/recent-views');
        const data = await response.json();
        setRecentItems(data);
      } catch (error) {
        const mockData = [
          { id: 1, name: 'Classic Watch', price: 199.99, image: images[0] },
          { id: 2, name: 'Leather Bag', price: 149.99, image: images[1] },
          { id: 3, name: 'Sunglasses', price: 89.99, image: images[2] },
          { id: 4, name: 'Sneakers', price: 129.99, image: images[3] }
        ];
        setRecentItems(mockData);
      }
    };
    fetchRecentViews();
  }, []);

  return (
    <div id="RecentViews_1" className="max-w-7xl mx-auto px-4 py-8">
      <h2 id="RecentViews_2" className="text-3xl font-bold text-gray-800 mb-6">Recently Viewed</h2>
      <div id="RecentViews_3" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recentItems.map((item) => (
          <div
            key={item.id}
            id={`RecentViews_${item.id + 3}`}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <div className="relative pb-[100%] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-gradient-to-b from-gray-50 to-white">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
              <p className="text-gray-600 font-medium">${item.price.toFixed(2)}</p>
              <button className="mt-3 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentViews;