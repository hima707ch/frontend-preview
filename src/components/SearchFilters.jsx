// Here's the enhanced version of the SearchFilters component with improved visual design and accessibility:

import React from 'react';

const SearchFilters = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Search Properties</h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative">
            <label htmlFor="location" className="block text-gray-700 font-semibold mb-2 pl-3">
              Location
            </label>
            <div className="relative">
              <input
                type="text"
                id="location"
                className="w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10 pr-4 placeholder-gray-400"
                placeholder="Enter location"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="price" className="block text-gray-700 font-semibold mb-2">
              Price Range
            </label>
            <select
              id="price"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="">Select price range</option>
              <option value="0-100000">$0 - $100,000</option>
              <option value="100000-200000">$100,000 - $200,000</option>
              <option value="200000-500000">$200,000 - $500,000</option>
              <option value="500000-1000000">$500,000 - $1,000,000</option>
              <option value="1000000+">$1,000,000+</option>
            </select>
          </div>
          <div>
            <label htmlFor="bedrooms" className="block text-gray-700 font-semibold mb-2">
              Bedrooms
            </label>
            <select
              id="bedrooms"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="">Select number of bedrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>
          </div>
          <div>
            <label htmlFor="amenities" className="block text-gray-700 font-semibold mb-2">
              Amenities
            </label>
            <select
              id="amenities"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="">Select amenities</option>
              <option value="pool">Pool</option>
              <option value="garage">Garage</option>
              <option value="balcony">Balcony</option>
              <option value="garden">Garden</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300 ease-in-out sm:col-span-2 lg:col-span-4 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchFilters;