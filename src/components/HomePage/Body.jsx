import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import FeaturedProperties from './FeaturedProperties';
import Footer from './Footer';
import { useHome } from './useHome';

const Body = () => {
  const { properties, isAuthenticated, handleLogout } = useHome();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Hero />
      <FeaturedProperties properties={properties} />
      <Footer />
    </div>
  );
};

export default Body;