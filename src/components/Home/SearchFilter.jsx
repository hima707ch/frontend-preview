import React from 'react';

const SearchFilter = ({ filters, onFilterChange }) => {
  return (
    <div id="SearchFilter_1" className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div id="SearchFilter_2" className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div id="SearchFilter_3">
          <label className="block text-gray-700 mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter location"
          />
        </div>
        <div id="SearchFilter_4">
          <label className="block text-gray-700 mb-2">Price Range</label>
          <div className="flex space-x-4">
            <input
              type="number"
              name="minPrice"
              value={filters.minPrice}
              onChange={(e) => onFilterChange('minPrice', e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Min Price"
            />
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={(e) => onFilterChange('maxPrice', e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Max Price"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;