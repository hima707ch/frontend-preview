import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    try {
      const response = await fetch(`/api/search?query=${value}`);
      const data = await response.json();
      setSuggestions(data.suggestions);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  return (
    <div id="SearchBar_1" className="w-full max-w-2xl mx-auto p-4">
      <div id="SearchBar_2" className="relative">
        <div id="SearchBar_3" className="relative flex items-center">
          <input
            id="SearchBar_4"
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search anything..."
            className="w-full px-6 py-3 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none shadow-lg transition-all duration-300 pr-12"
          />
          <button
            id="SearchBar_5"
            className="absolute right-4 p-2 text-gray-500 hover:text-blue-500 transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        {suggestions.length > 0 && (
          <div
            id="SearchBar_6"
            className="absolute w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
          >
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                id={`SearchBar_${index + 7}`}
                className="px-4 py-2 hover:bg-gray-50 cursor-pointer transition-colors duration-200 flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;