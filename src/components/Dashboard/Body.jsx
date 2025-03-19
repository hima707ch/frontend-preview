import React from 'react';
import Header from './Header';
import PropertyList from './PropertyList';
import useDashboard from './useDashboard';

const Body = () => {
  const { properties, loading, error, handleDelete, handleEdit } = useDashboard();

  if (loading) return <div id="Body_1" className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="min-h-screen bg-gray-100">
      <Header />
      <main id="Body_4" className="container mx-auto px-4 py-8">
        <h1 id="Body_5" className="text-3xl font-bold mb-8">Property Dashboard</h1>
        <PropertyList 
          properties={properties} 
          onDelete={handleDelete} 
          onEdit={handleEdit} 
        />
      </main>
    </div>
  );
};

export default Body;