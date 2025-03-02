import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const params = {
        location: location || undefined,
        minPrice: minPrice || undefined,
        maxPrice: maxPrice || undefined
      };

      const response = await axios.get('/api/properties', { params });
      setSuggestions(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="SearchBar_1" className="w-full max-w-4xl mx-auto p-6">
      <div id="SearchBar_2" className="bg-white rounded-xl shadow-2xl p-6 backdrop-blur-lg bg-opacity-90 border border-gray-100">
        <div id="SearchBar_3" className="flex flex-col md:flex-row gap-4">
          <div id="SearchBar_4" className="flex-1">
            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-gray-100"
            />
          </div>
          <div id="SearchBar_5" className="flex gap-4 flex-1">
            <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-gray-100"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-gray-100"
            />
          </div>
          <button
            onClick={handleSearch}
            disabled={isLoading}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : 'Search'}
          </button>
        </div>
        {suggestions.length > 0 && (
          <div id="SearchBar_6" className="mt-6 space-y-4">
            {suggestions.map((property, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200 cursor-pointer">
                <h3 className="font-semibold text-gray-800">{property.title}</h3>
                <p className="text-gray-600">{property.location}</p>
                <p className="text-blue-600 font-medium">${property.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;