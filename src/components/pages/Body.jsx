import React from 'react';
import Hero from './Hero';
import SearchBar from './SearchBar';
import FeaturedProperties from './FeaturedProperties';
import useHome from './useHome';

const Body = () => {
  const { properties, loading, error, handleSearch } = useHome();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-50">
      <Hero />
      <div id="Body_2" className="container mx-auto px-4 py-8">
        <SearchBar onSearch={handleSearch} />
        {loading && <div id="Body_3" className="text-center py-8">Loading...</div>}
        {error && <div id="Body_4" className="text-center py-8 text-red-500">{error}</div>}
        {!loading && !error && <FeaturedProperties properties={properties} />}
      </div>
    </div>
  );
};

export default Body;