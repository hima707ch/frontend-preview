import React from 'react';
import PropertyList from './PropertyList';
import AdminControls from './AdminControls';
import useDashboard from './useDashboard';

const Body = () => {
  const { properties, loading, error, handleDelete, handleEdit } = useDashboard();

  if (loading) return <div id="Body_1" className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="container mx-auto px-4 py-8">
      <h1 id="Body_4" className="text-3xl font-bold mb-8">Seller Dashboard</h1>
      <div id="Body_5" className="grid grid-cols-1 gap-8">
        <PropertyList properties={properties} />
        <AdminControls onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </div>
  );
};

export default Body;