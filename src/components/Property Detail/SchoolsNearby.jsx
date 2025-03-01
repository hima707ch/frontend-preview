import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const SchoolsNearby = () => {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      const response = await fetch('api/schools/nearby');
      const data = await response.json();
      setSchools([
        {
          id: 1,
          name: 'St. Mary s International School',
          distance: '0.5 km',
          rating: 4.8,
          image: images[0],
          type: 'Private',
          fees: '$15,000/year'
        },
        {
          id: 2,
          name: 'Green Valley Public School',
          distance: '1.2 km',
          rating: 4.5,
          image: images[1],
          type: 'Public',
          fees: '$8,000/year'
        },
        {
          id: 3,
          name: 'Montessori Kids Academy',
          distance: '2.0 km',
          rating: 4.7,
          image: images[2],
          type: 'Private',
          fees: '$12,000/year'
        }
      ]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching schools:', error);
      setLoading(false);
    }
  };

  const filteredSchools = schools.filter(school =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="SchoolsNearby_1" className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 id="SchoolsNearby_2" className="text-4xl font-bold text-gray-800 mb-8 text-center">Schools Near You</h1>
        
        <div id="SchoolsNearby_3" className="mb-8">
          <input
            type="text"
            placeholder="Search schools..."
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {loading ? (
          <div id="SchoolsNearby_4" className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div id="SchoolsNearby_5" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSchools.map(school => (
              <div
                key={school.id}
                id={`SchoolsNearby_${school.id + 5}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
              >
                <img
                  src={school.image}
                  alt={school.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">{school.name}</h2>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-500 mr-1">
                      ★
                    </span>
                    <span className="text-gray-600">{school.rating}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="text-gray-600">{school.distance}</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{school.type}</span>
                    <span className="text-gray-700 font-semibold">{school.fees}</span>
                  </div>
                  <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SchoolsNearby;