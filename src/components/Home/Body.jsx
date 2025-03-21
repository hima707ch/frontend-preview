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
      <About />
      <Testimonials {...TestimonialsData} />
      
    </>
  );
};

export default Body;