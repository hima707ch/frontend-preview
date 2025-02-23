import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import PropertiesSection from './PropertiesSection';
import ServicesSection from './ServicesSection';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';
import Footer from './Footer';

const Body = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <PropertiesSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default Body;