import React from 'react';

const Search = ({ searchCriteria, onSearchChange }) => {
  return (
    <div id="Search_1" className="mb-8 bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div id="Search_2" className="flex flex-col">
          <label className="mb-2 text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={searchCriteria.location}
            onChange={onSearchChange}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter location"
          />
        </div>
        <div id="Search_3" className="flex flex-col">
          <label className="mb-2 text-gray-700">Min Price</label>
          <input
            type="number"
            name="minPrice"
            value={searchCriteria.minPrice}
            onChange={onSearchChange}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Minimum price"
          />
        </div>
        <div id="Search_4" className="flex flex-col">
          <label className="mb-2 text-gray-700">Max Price</label>
          <input
            type="number"
            name="maxPrice"
            value={searchCriteria.maxPrice}
            onChange={onSearchChange}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Maximum price"
          />
        </div>
        <div id="Search_5" className="flex flex-col">
          <label className="mb-2 text-gray-700">Property Type</label>
          <select
            name="type"
            value={searchCriteria.type}
            onChange={onSearchChange}
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Search;