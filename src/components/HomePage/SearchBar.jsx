import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    propertyType: 'all'
  });

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 2) {
        setSuggestions([]);
        return;
      }
      setIsLoading(true);
      try {
        const response = await axios.get(`/api/properties?search=${query}&location=${filters.location}&minPrice=${filters.minPrice}&maxPrice=${filters.maxPrice}&type=${filters.propertyType}`);
        setSuggestions(response.data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
      setIsLoading(false);
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [query, filters]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6" id="SearchBar_1">
      <div className="relative">
        <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <input
            type="text"
            placeholder="Search properties..."
            className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            id="SearchBar_2"
          />
          <div className="flex gap-2">
            <select
              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              value={filters.propertyType}
              onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
              id="SearchBar_3"
            >
              <option value="all">All Types</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
            </select>
            <button
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md"
              id="SearchBar_4"
            >
              Search
            </button>
          </div>
        </div>

        {isLoading && (
          <div className="absolute w-full mt-2 bg-white rounded-md shadow-lg border border-gray-200 p-2" id="SearchBar_5">
            <div className="animate-pulse flex space-x-4 p-2">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        )}

        {!isLoading && suggestions.length > 0 && (
          <div className="absolute w-full mt-2 bg-white rounded-md shadow-lg border border-gray-200 max-h-96 overflow-y-auto" id="SearchBar_6">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0"
                onClick={() => setQuery(suggestion.title)}
                id={`SearchBar_7_${index}`}
              >
                <div className="font-medium">{suggestion.title}</div>
                <div className="text-sm text-gray-500">{suggestion.location}</div>
                <div className="text-sm text-blue-500">${suggestion.price}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2" id="SearchBar_8">
        <div className="text-sm text-gray-500">Popular:</div>
        {['Apartments in New York', 'Houses in LA', 'Condos in Miami'].map((tag, index) => (
          <button
            key={index}
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
            onClick={() => setQuery(tag)}
            id={`SearchBar_9_${index}`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;