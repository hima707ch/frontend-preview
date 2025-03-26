import React from 'react';
import SearchFilters from './SearchFilters';
import SearchResults from './SearchResults';
import useSearch from './useSearch';

const Body = () => {
  const { 
    filters,
    properties,
    loading,
    error,
    handleFilterChange,
    resetFilters
  } = useSearch();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <h1 id="Body_2" className="text-3xl font-bold text-gray-800 mb-8">Property Search</h1>
      
      <div id="Body_3" className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div id="Body_4" className="lg:col-span-1">
          <SearchFilters 
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={resetFilters}
          />
        </div>
        
        <div id="Body_5" className="lg:col-span-3">
          {error && (
            <div id="Body_6" className="text-red-500 mb-4">{error}</div>
          )}
          
          <SearchResults 
            properties={properties}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default Body;