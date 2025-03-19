import React from 'react';
import Hero from './Hero';
import PropertyList from './PropertyList';
import Navigation from './Navigation';
import useHome from './useHome';

const Body = () => {
  const { properties, loading, error, navigateToProperty } = useHome();

  return (
    <div className="min-h-screen bg-gray-50" id="Body_1">
      <Navigation id="Body_2" />
      <Hero id="Body_3" />
      <main className="container mx-auto px-4 py-8" id="Body_4">
        {loading && <div className="text-center">Loading...</div>}
        {error && <div className="text-red-500 text-center">{error}</div>}
        <PropertyList properties={properties} onPropertyClick={navigateToProperty} id="Body_5" />
      </main>
    </div>
  );
};

export default Body;