import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilterPanel = () => {
  const [filters, setFilters] = useState({
    priceRange: [0, 1000000],
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    furnished: false
  });

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('/api/properties', { params: filters });
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };
    fetchProperties();
  }, [filters]);

  const handleFilterChange = (name, value) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div id="FilterPanel_1" className="w-80 bg-white shadow-lg rounded-lg p-6 space-y-6">
      <div id="FilterPanel_2" className="border-b pb-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Filters</h2>
      </div>

      <div id="FilterPanel_3" className="space-y-4">
        <div className="space-y-2">
          <label className="text-gray-700 font-medium">Price Range</label>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="0"
              max="1000000"
              value={filters.priceRange[1]}
              onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm text-gray-600">${filters.priceRange[1]}</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-gray-700 font-medium">Property Type</label>
          <select
            value={filters.propertyType}
            onChange={(e) => handleFilterChange('propertyType', e.target.value)}
            className="w-full p-2 border rounded-md bg-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="villa">Villa</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-gray-700 font-medium">Bedrooms</label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, '5+'].map((num) => (
              <button
                key={num}
                onClick={() => handleFilterChange('bedrooms', num)}
                className={`px-4 py-2 rounded-full text-sm ${filters.bedrooms === num ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-gray-700 font-medium">Bathrooms</label>
          <div className="flex space-x-2">
            {[1, 2, 3, '4+'].map((num) => (
              <button
                key={num}
                onClick={() => handleFilterChange('bathrooms', num)}
                className={`px-4 py-2 rounded-full text-sm ${filters.bathrooms === num ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="furnished"
            checked={filters.furnished}
            onChange={(e) => handleFilterChange('furnished', e.target.checked)}
            className="w-4 h-4 text-blue-500 rounded focus:ring-blue-500"
          />
          <label htmlFor="furnished" className="text-gray-700">Furnished</label>
        </div>

        <button
          onClick={() => setFilters({
            priceRange: [0, 1000000],
            propertyType: '',
            bedrooms: '',
            bathrooms: '',
            furnished: false
          })}
          className="w-full py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition duration-200"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;