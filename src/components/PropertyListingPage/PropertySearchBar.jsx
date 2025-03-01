import React, { useState } from 'react';

const PropertySearchBar = () => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    propertyType: '',
    priceRange: '',
    bedrooms: ''
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/properties/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchParams)
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error searching properties:', error);
    }
  };

  return (
    <div id="PropertySearchBar_1" className="w-full max-w-4xl mx-auto p-6">
      <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-6 space-y-4">
        <div id="PropertySearchBar_2" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div id="PropertySearchBar_3" className="relative">
            <input
              type="text"
              placeholder="Location"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              value={searchParams.location}
              onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
            />
          </div>
          
          <div id="PropertySearchBar_4" className="relative">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              value={searchParams.propertyType}
              onChange={(e) => setSearchParams({...searchParams, propertyType: e.target.value})}
            >
              <option value="">Property Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="villa">Villa</option>
            </select>
          </div>
          
          <div id="PropertySearchBar_5" className="relative">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              value={searchParams.priceRange}
              onChange={(e) => setSearchParams({...searchParams, priceRange: e.target.value})}
            >
              <option value="">Price Range</option>
              <option value="0-100000">$0 - $100,000</option>
              <option value="100000-300000">$100,000 - $300,000</option>
              <option value="300000-500000">$300,000 - $500,000</option>
              <option value="500000+">$500,000+</option>
            </select>
          </div>
          
          <div id="PropertySearchBar_6" className="relative">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              value={searchParams.bedrooms}
              onChange={(e) => setSearchParams({...searchParams, bedrooms: e.target.value})}
            >
              <option value="">Bedrooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4+">4+ Bedrooms</option>
            </select>
          </div>
        </div>
        
        <div id="PropertySearchBar_7" className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg
            hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-lg"
          >
            Search Properties
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertySearchBar;