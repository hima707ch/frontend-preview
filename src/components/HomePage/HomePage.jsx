import React from 'react';
import PropertyGrid from './PropertyGrid';
import Hero from './Hero';
import { useHome } from './useHome';

export const HomePage = () => {
  const { properties, loading, error } = useHome();

  return (
    <div id="HomePage_1" className="min-h-screen bg-gray-50">
      <Hero />
      <main id="HomePage_2" className="container mx-auto px-4 py-8">
        {loading && (
          <div id="HomePage_3" className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
          </div>
        )}
        {error && (
          <div id="HomePage_4" className="text-red-500 text-center py-10">{error}</div>
        )}
        {properties && <PropertyGrid properties={properties} />}
      </main>
    </div>
  );
};
