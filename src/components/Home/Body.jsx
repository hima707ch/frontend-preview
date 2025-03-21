import React from 'react';
import PropertyList from './PropertyList';
import Search from './Search';
import useHome from './useHome';
import Hero from './Hero';
import About from './About';
import Testimonials from './Testimonials';

import TestimonialsData from './data';

const Body = () => {
  const { properties, loading, error, searchCriteria, handleSearchChange } = useHome();

  return (
    <>
      <Hero />
      <About /><Testimonials {...TestimonialsData} />
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <h1 id="Body_2" className="text-4xl font-bold text-gray-800 mb-8">Find Your Dream Property</h1>
      <Search id="Body_3" searchCriteria={searchCriteria} onSearchChange={handleSearchChange} />
      {error && <div id="Body_4" className="text-red-500 mb-4">{error}</div>}
      {loading ? (
        <div id="Body_5" className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <PropertyList id="Body_6" properties={properties} />
      )}
    </div>
    </>
  );
};

export default Body;