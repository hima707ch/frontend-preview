import React from 'react';
import Hero from './Hero';
import PropertyList from './PropertyList';
import useHome from './useHome';

export default function Body() {
  const { properties, loading, error } = useHome();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-50">
      <Hero />
      <main id="Body_2" className="container mx-auto px-4 py-8">
        {loading && <div id="Body_3" className="text-center">Loading properties...</div>}
        {error && <div id="Body_4" className="text-center text-red-500">{error}</div>}
        {properties && <PropertyList properties={properties} />}
      </main>
    </div>
  );
}