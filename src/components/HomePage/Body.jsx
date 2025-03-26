import React from 'react';
import Hero from './Hero';
import SearchBar from './SearchBar';
import FeaturedProperties from './FeaturedProperties';
import useHome from './useHome';

const Body = () => {
  const { user, properties, searchQuery, handleSearch, loading, error } = useHome();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-50">
      <Hero user={user} />
      <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
      {loading ? (
        <div id="Body_2" className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div id="Body_3" className="text-red-500 text-center py-4">{error}</div>
      ) : (
        <FeaturedProperties properties={properties} />
      )}
    </div>
  );
};

export default Body;