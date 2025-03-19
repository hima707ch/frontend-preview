import React from 'react';
import Hero from './Hero';
import PropertyList from './PropertyList';
import LoginRegisterLinks from './LoginRegisterLinks';
import useHome from './useHome';

export default function Body() {
  const { isLoggedIn, properties, loading, error } = useHome();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-50">
      <Hero />
      {!isLoggedIn && <LoginRegisterLinks />}
      <main id="Body_2" className="container mx-auto px-4 py-8">
        {loading && <div id="Body_3" className="text-center">Loading properties...</div>}
        {error && <div id="Body_4" className="text-red-500 text-center">{error}</div>}
        {properties && <PropertyList properties={properties} />}
      </main>
    </div>
  );
}