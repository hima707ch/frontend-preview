import React from 'react';

const SearchBar = ({ onSearch, searchCriteria }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8" id="SearchBar_1">
      <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(new FormData(e.target));
      }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4" id="SearchBar_2">
          <input
            type="text"
            name="type"
            placeholder="Property Type"
            className="border p-2 rounded"
            defaultValue={searchCriteria.type}
            id="SearchBar_3"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="border p-2 rounded"
            defaultValue={searchCriteria.location}
            id="SearchBar_4"
          />
          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            className="border p-2 rounded"
            defaultValue={searchCriteria.minPrice}
            id="SearchBar_5"
          />
          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            className="border p-2 rounded"
            defaultValue={searchCriteria.maxPrice}
            id="SearchBar_6"
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
          id="SearchBar_7"
        >
          Search Properties
        </button>
      </form>
    </div>
  );
};

export default SearchBar;