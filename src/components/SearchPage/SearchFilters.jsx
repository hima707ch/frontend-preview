import React from 'react';

const SearchFilters = ({ filters, onFilterChange, onReset }) => {
  return (
    <div id="SearchFilters_1" className="bg-white p-6 rounded-lg shadow-md">
      <h2 id="SearchFilters_2" className="text-xl font-semibold mb-4">Filters</h2>
      
      <div id="SearchFilters_3" className="space-y-4">
        <div id="SearchFilters_4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
          <div className="flex gap-2">
            <input
              id="SearchFilters_5"
              type="number"
              placeholder="Min"
              value={filters.minPrice}
              onChange={(e) => onFilterChange('minPrice', e.target.value)}
              className="w-full p-2 border rounded-md"
            />
            <input
              id="SearchFilters_6"
              type="number"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={(e) => onFilterChange('maxPrice', e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        <div id="SearchFilters_7">
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            id="SearchFilters_8"
            type="text"
            placeholder="Enter location"
            value={filters.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div id="SearchFilters_9">
          <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
          <select
            id="SearchFilters_10"
            value={filters.propertyType}
            onChange={(e) => onFilterChange('propertyType', e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">All Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="villa">Villa</option>
          </select>
        </div>

        <button
          id="SearchFilters_11"
          onClick={onReset}
          className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default SearchFilters;