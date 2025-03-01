import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const NeighborhoodInformation = () => {
  const [neighborhoods, setNeighborhoods] = useState([
    {
      id: 1,
      name: 'Downtown District',
      description: 'Vibrant urban center with modern amenities and cultural attractions',
      image: images[0],
      stats: {
        safety: 90,
        schools: 85,
        transit: 95,
        lifestyle: 92
      }
    },
    {
      id: 2,
      name: 'Riverside Heights',
      description: 'Peaceful residential area with scenic waterfront views and parks',
      image: images[1],
      stats: {
        safety: 88,
        schools: 92,
        transit: 82,
        lifestyle: 86
      }
    },
    {
      id: 3,
      name: 'Garden Grove',
      description: 'Family-friendly suburb with excellent schools and green spaces',
      image: images[2],
      stats: {
        safety: 94,
        schools: 96,
        transit: 78,
        lifestyle: 84
      }
    }
  ]);

  return (
    <div id="NeighborhoodInformation_1" className="container mx-auto px-4 py-8">
      <h2 id="NeighborhoodInformation_2" className="text-4xl font-bold text-center mb-12 text-gray-800">Explore Our Neighborhoods</h2>
      
      <div id="NeighborhoodInformation_3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {neighborhoods.map((neighborhood) => (
          <div
            key={neighborhood.id}
            id={`NeighborhoodInformation_${neighborhood.id + 3}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <div className="relative h-48">
              <img
                src={neighborhood.image}
                alt={neighborhood.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-2xl font-semibold text-white">{neighborhood.name}</h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-6">{neighborhood.description}</p>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Safety</span>
                  <div className="w-48 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: `${neighborhood.stats.safety}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-700 ml-2">{neighborhood.stats.safety}%</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Schools</span>
                  <div className="w-48 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${neighborhood.stats.schools}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-700 ml-2">{neighborhood.stats.schools}%</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Transit</span>
                  <div className="w-48 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-purple-500 rounded-full"
                      style={{ width: `${neighborhood.stats.transit}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-700 ml-2">{neighborhood.stats.transit}%</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Lifestyle</span>
                  <div className="w-48 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-orange-500 rounded-full"
                      style={{ width: `${neighborhood.stats.lifestyle}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-700 ml-2">{neighborhood.stats.lifestyle}%</span>
                </div>
              </div>

              <button
                className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-blue-900 transition duration-300 font-semibold"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NeighborhoodInformation;