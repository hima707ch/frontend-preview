import React from 'react';
import images from '../assets/images';

const amenities = [
  { id: 'AmenitiesList_1', icon: images[0], title: 'Swimming Pool', description: 'Dive into relaxation in our crystal-clear pool' },
  { id: 'AmenitiesList_2', icon: images[1], title: 'Fitness Center', description: 'State-of-the-art equipment for your workout needs' },
  { id: 'AmenitiesList_3', icon: images[2], title: 'Spa & Wellness', description: 'Rejuvenate your body and mind' },
  { id: 'AmenitiesList_4', icon: images[3], title: 'Restaurant', description: 'Fine dining with exquisite cuisine' },
  { id: 'AmenitiesList_5', icon: images[4], title: 'Conference Rooms', description: 'Professional spaces for meetings and events' },
  { id: 'AmenitiesList_6', icon: images[5], title: 'Concierge Service', description: '24/7 assistance for all your needs' }
];

const AmenitiesList = () => {
  return (
    <div id="AmenitiesList_7" className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 id="AmenitiesList_8" className="text-4xl font-bold text-center mb-12 text-gray-800 hover:text-gray-900 transition-colors duration-300">
          Our Premium Amenities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity) => (
            <div
              key={amenity.id}
              id={amenity.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                <img src={amenity.icon} alt={amenity.title} className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{amenity.title}</h3>
              <p className="text-gray-600">{amenity.description}</p>
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 text-sm font-medium">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesList;