import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm.length < 2) {
        setSuggestions([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await axios.get(`/api/properties?keyword=${searchTerm}`);
        setSuggestions(response.data.slice(0, 5));
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setSuggestions([]);
      }
      setIsLoading(false);
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search submission
    console.log('Searching for:', searchTerm);
  };

  return (
    <div id="SearchBar_1" className="w-full max-w-4xl mx-auto px-4 py-6">
      <div className="relative">
        <form onSubmit={handleSearch} className="relative">
          <div id="SearchBar_2" className="relative flex items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              className="w-full px-6 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none shadow-lg transition-all duration-300 pr-12"
              placeholder="Search properties by location, name, or keyword..."
              id="SearchBar_3"
            />
            <button
              type="submit"
              className="absolute right-4 p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
              id="SearchBar_4"
            >
              <svg
                className="w-6 h-6 text-white"
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

          {showSuggestions && suggestions.length > 0 && (
            <div
              id="SearchBar_5"
              className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200"
            >
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  id={`SearchBar_6_${index}`}
                  className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200 border-b last:border-b-0"
                  onClick={() => {
                    setSearchTerm(suggestion.name || suggestion.location);
                    setShowSuggestions(false);
                  }}
                >
                  <p className="text-gray-800">{suggestion.name || suggestion.location}</p>
                  {suggestion.description && (
                    <p className="text-sm text-gray-500 truncate">
                      {suggestion.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {isLoading && (
            <div
              id="SearchBar_7"
              className="absolute right-16 top-1/2 transform -translate-y-1/2"
            >
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500" />
            </div>
          )}
        </form>
      </div>

      <div id="SearchBar_8" className="mt-4 flex flex-wrap gap-2 justify-center">
        <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm transition-colors duration-300">
          Popular Locations
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm transition-colors duration-300">
          Recent Searches
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm transition-colors duration-300">
          Featured Properties
        </button>
      </div>
    </div>
  );
};

export default SearchBar;