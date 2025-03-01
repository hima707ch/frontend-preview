import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import PropertiesSection from './PropertiesSection';
import ServicesSection from './ServicesSection';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';
import Footer from './Footer';
import HomePage from './HomePage/Body.jsx'
import PropertyListingPage from './PropertyListingPage/Body.jsx'

const Body = () => {
  return (
    <div>
      <HomePage/>
      <PropertyListingPage/>
    </div>
  );
};

export default Body;
