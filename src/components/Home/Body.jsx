import React from 'react';
import PropertyList from './PropertyList';
import SearchBar from './SearchBar';
import useHome from './useHome';

const Body = () => {
  const { properties, loading, error, searchTerm, handleSearch } = useHome();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <h1 id="Body_2" className="text-4xl font-bold text-gray-800 mb-8 text-center">Find Your Dream Property</h1>
      <SearchBar id="Body_3" onSearch={handleSearch} />
      {error && <div id="Body_4" className="text-red-500 text-center my-4">{error}</div>}
      {loading ? (
        <div id="Body_5" className="text-center my-8">Loading properties...</div>
      ) : (
        <PropertyList id="Body_6" properties={properties} searchTerm={searchTerm} />
      )}
    </div>
  );
};

export default Body;