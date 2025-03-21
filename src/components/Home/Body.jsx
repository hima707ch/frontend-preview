import React from 'react';
import PropertyList from './PropertyList';
import Search from './Search';
import useHome from './useHome';
import Hero from './Hero';
import About from './About';
import Testimonials from './Testimonials';
import FeaturedProducts from "./FeaturedProducts";
import Contact from "./Contact";

import TestimonialsData from './data';

const Body = () => {
  const { properties, loading, error, searchCriteria, handleSearchChange } = useHome();

  return (
    <>
      <Hero />
      <About />
      <Testimonials {...TestimonialsData} />
      <FeaturedProducts />
      <Contact />
    </>
  );
};

export default Body;