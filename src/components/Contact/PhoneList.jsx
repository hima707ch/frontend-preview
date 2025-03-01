import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const PhoneList = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('api/phones')
      .then(response => response.json())
      .then(data => {
        setPhones(data);
        setLoading(false);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const dummyPhones = [
    { id: 1, name: 'iPhone 13 Pro', price: 999, brand: 'Apple', image: images[0], rating: 4.8 },
    { id: 2, name: 'Samsung S21 Ultra', price: 1199, brand: 'Samsung', image: images[1], rating: 4.7 },
    { id: 3, name: 'Google Pixel 6', price: 799, brand: 'Google', image: images[2], rating: 4.5 },
    { id: 4, name: 'OnePlus 9 Pro', price: 899, brand: 'OnePlus', image: images[3], rating: 4.6 },
  ];

  return (
    <div id="PhoneList_1" className="container mx-auto px-4 py-8">
      <h1 id="PhoneList_2" className="text-3xl font-bold text-center mb-8 text-gray-800">Latest Smartphones</h1>
      <div id="PhoneList_3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {(loading ? dummyPhones : phones).map(phone => (
          <div
            key={phone.id}
            id={`PhoneList_${phone.id + 3}`}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <div className="relative">
              <img
                src={phone.image}
                alt={phone.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-0 right-0 m-2 bg-yellow-400 text-gray-800 px-2 py-1 rounded-full text-sm font-semibold">
                ★ {phone.rating}
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{phone.name}</h2>
              <p className="text-gray-600 mb-2">{phone.brand}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">${phone.price}</span>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                  onClick={() => window.location.href = `/phone/${phone.id}`}
                >
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

export default PhoneList;