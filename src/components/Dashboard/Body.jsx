import React from 'react';
import PropertyManager from './PropertyManager';
import useDashboard from './useDashboard';

const Body = () => {
  const { isLoading } = useDashboard();

  if (isLoading) {
    return (
      <div id="Body_1" className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div id="Body_2" className="container mx-auto px-4 py-8">
      <h1 id="Body_3" className="text-3xl font-bold mb-8 text-gray-800">Property Dashboard</h1>
      <PropertyManager />
    </div>
  );
};

export default Body;