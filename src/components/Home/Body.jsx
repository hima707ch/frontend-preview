import React from 'react';
import PropertyList from './PropertyList';
import SearchFilter from './SearchFilter';
import { useHome } from './useHome';

const Body = () => {
  const { properties, loading, error, filters, handleFilterChange } = useHome();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <h1 id="Body_2" className="text-4xl font-bold text-gray-800 mb-8 text-center">Find Your Dream Property</h1>
      <SearchFilter id="Body_3" filters={filters} onFilterChange={handleFilterChange} />
      {loading && <div id="Body_4" className="text-center py-8">Loading properties...</div>}
      {error && <div id="Body_5" className="text-red-500 text-center py-8">{error}</div>}
      {!loading && !error && <PropertyList id="Body_6" properties={properties} />}
    </div>
  );
};

export default Body;