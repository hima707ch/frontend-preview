import React from 'react';

const Search = ({ searchCriteria, onSearchChange }) => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 mb-10 rounded-b-3xl shadow-2xl">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Find Your Dream Property</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Discover the perfect place to call home with our extensive property listings</p>
        </div>
      </div>
      <div id="Search_1" className="max-w-7xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-xl -mt-16 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div id="Search_2" className="flex flex-col group">
            <label className="mb-2 font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-200">Location</label>
            <input
              type="text"
              name="location"
              value={searchCriteria.location}
              onChange={onSearchChange}
              className="border-2 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300"
              placeholder="Enter location"
            />
          </div>
          <div id="Search_3" className="flex flex-col group">
            <label className="mb-2 font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-200">Min Price</label>
            <input
              type="number"
              name="minPrice"
              value={searchCriteria.minPrice}
              onChange={onSearchChange}
              className="border-2 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300"
              placeholder="Minimum price"
            />
          </div>
          <div id="Search_4" className="flex flex-col group">
            <label className="mb-2 font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-200">Max Price</label>
            <input
              type="number"
              name="maxPrice"
              value={searchCriteria.maxPrice}
              onChange={onSearchChange}
              className="border-2 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300"
              placeholder="Maximum price"
            />
          </div>
          <div id="Search_5" className="flex flex-col group">
            <label className="mb-2 font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-200">Property Type</label>
            <select
              name="type"
              value={searchCriteria.type}
              onChange={onSearchChange}
              className="border-2 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300 appearance-none bg-white cursor-pointer"
            >
              <option value="">All Types</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;