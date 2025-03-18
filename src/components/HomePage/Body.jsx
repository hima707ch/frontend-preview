import React from 'react';
import Hero from './Hero';
import PropertyList from './PropertyList';
import SearchBar from './SearchBar';
import useHome from './useHome';

const Body = () => {
  const { properties, loading, error, searchCriteria, handleSearch } = useHome();

  return (
    <div className="min-h-screen bg-gray-50" id="Body_1">
      <Hero />
      <div className="container mx-auto px-4 py-8" id="Body_2">
        <SearchBar onSearch={handleSearch} searchCriteria={searchCriteria} />
        {loading ? (
          <div className="flex justify-center items-center h-64" id="Body_3">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-red-500 text-center py-4" id="Body_4">{error}</div>
        ) : (
          <PropertyList properties={properties} />
        )}
      </div>
    </div>
  );
};

export default Body;