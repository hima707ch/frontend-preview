import React from 'react';
import PropertyGrid from './PropertyGrid';
import { useProperty } from './useProperty';

const Body = () => {
  const { properties, loading, error } = useProperty();

  if (loading) return <div id="Body_1" className="flex justify-center items-center h-screen"><div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div></div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="container mx-auto px-4 py-8">
      <h1 id="Body_4" className="text-4xl font-bold text-gray-800 mb-8 text-center">Available Properties</h1>
      <PropertyGrid properties={properties} />
    </div>
  );
};

export default Body;