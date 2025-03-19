import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div id="SearchBar_1" className="mb-8">
      <div id="SearchBar_2" className="max-w-2xl mx-auto">
        <input
          type="text"
          id="SearchBar_3"
          placeholder="Search by property name or location..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;