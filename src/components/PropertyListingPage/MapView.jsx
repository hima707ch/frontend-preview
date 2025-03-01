import React, { useEffect, useState } from 'react';
import images from '../assets/images';

const MapView = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('api/locations')
      .then(res => res.json())
      .then(data => setLocations(data))
      .catch(err => console.error(err));
  }, []);

  const dummyLocations = [
    { id: 1, name: 'Central Park', lat: 40.7829, lng: -73.9654, image: images[0] },
    { id: 2, name: 'Times Square', lat: 40.7580, lng: -73.9855, image: images[1] },
    { id: 3, name: 'Empire State', lat: 40.7484, lng: -73.9857, image: images[2] }
  ];

  return (
    <div id="MapView_1" className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div id="MapView_2" className="max-w-7xl mx-auto">
        <h1 id="MapView_3" className="text-4xl font-bold text-white mb-8 text-center">Interactive Location Map</h1>
        
        <div id="MapView_4" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div id="MapView_5" className="bg-white rounded-lg p-6 shadow-lg">
            <div id="MapView_6" className="h-[500px] bg-gray-200 rounded-lg relative">
              {/* Map placeholder - In real implementation, use Google Maps or similar */}
              <div id="MapView_7" className="absolute inset-0 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 text-lg">Map View</span>
              </div>
            </div>
          </div>

          <div id="MapView_8" className="space-y-4">
            {dummyLocations.map(location => (
              <div
                key={location.id}
                id={`MapView_${location.id + 8}`}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center p-4">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">{location.name}</h3>
                    <p className="text-gray-600">Lat: {location.lat}</p>
                    <p className="text-gray-600">Lng: {location.lng}</p>
                    <button 
                      className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                      onClick={() => console.log(`Navigating to ${location.name}`)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="MapView_12" className="mt-8">
          <button 
            className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-semibold"
            onClick={() => console.log('Adding new location')}
          >
            Add New Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapView;