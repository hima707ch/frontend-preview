import React from 'react';
import images from '../assets/images';

const amenitiesData = [
  { id: 1, name: 'Swimming Pool', icon: '🏊‍♂️', description: 'Olympic-sized swimming pool with heated water' },
  { id: 2, name: 'Fitness Center', icon: '💪', description: 'State-of-the-art gym equipment and personal trainers' },
  { id: 3, name: 'High-Speed Internet', icon: '🌐', description: 'Fiber-optic internet connection throughout' },
  { id: 4, name: 'Parking Space', icon: '🅿️', description: 'Secured underground parking with EV charging' },
  { id: 5, name: 'Security', icon: '🔒', description: '24/7 security with CCTV surveillance' },
  { id: 6, name: 'Garden Area', icon: '🌳', description: 'Landscaped gardens with seating areas' },
  { id: 7, name: 'Kids Play Area', icon: '🎮', description: 'Safe and monitored children's playground' },
  { id: 8, name: 'Club House', icon: '🏛️', description: 'Multi-purpose community gathering space' }
];

const AmenitiesList = () => {
  return (
    <div id="AmenitiesList_1" className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 min-h-screen">
      <h2 id="AmenitiesList_2" className="text-3xl font-bold text-center text-gray-800 mb-8">Property Amenities</h2>
      <div id="AmenitiesList_3" className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {amenitiesData.map((amenity) => (
          <div
            key={amenity.id}
            id={`AmenitiesList_${amenity.id + 3}`}
            className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
          >
            <div className="text-4xl mb-4">{amenity.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{amenity.name}</h3>
            <p className="text-gray-600">{amenity.description}</p>
          </div>
        ))}
      </div>
      <div id="AmenitiesList_12" className="mt-12 text-center">
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
          Schedule a Tour
        </button>
      </div>
    </div>
  );
};

export default AmenitiesList;