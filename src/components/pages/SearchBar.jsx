import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    propertyType: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <form id="SearchBar_1" onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div id="SearchBar_2" className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          id="SearchBar_3"
          type="text"
          placeholder="Location"
          className="p-2 border rounded"
          value={filters.location}
          onChange={(e) => setFilters({...filters, location: e.target.value})}
        />
        <input
          id="SearchBar_4"
          type="number"
          placeholder="Min Price"
          className="p-2 border rounded"
          value={filters.minPrice}
          onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
        />
        <input
          id="SearchBar_5"
          type="number"
          placeholder="Max Price"
          className="p-2 border rounded"
          value={filters.maxPrice}
          onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
        />
        <select
          id="SearchBar_6"
          className="p-2 border rounded"
          value={filters.propertyType}
          onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
        >
          <option value="">Property Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
        </select>
      </div>
      <button
        id="SearchBar_7"
        type="submit"
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Search Properties
      </button>
    </form>
  );
};

export default SearchBar;