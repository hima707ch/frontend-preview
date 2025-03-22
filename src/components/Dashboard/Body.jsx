import React from 'react';
import PropertyList from './PropertyList';
import AddProperty from './AddProperty';
import useDashboard from './useDashboard';

const Body = () => {
  const { properties, loading, error, handleDelete, handleEdit, handleAdd } = useDashboard();

  if (loading) return <div id="Body_1" className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="container mx-auto px-4 py-8">
      <h1 id="Body_4" className="text-3xl font-bold mb-8">My Dashboard</h1>
      <div id="Body_5" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div id="Body_6" className="lg:col-span-2">
          <PropertyList properties={properties} onDelete={handleDelete} onEdit={handleEdit} />
        </div>
        <div id="Body_7" className="lg:col-span-1">
          <AddProperty onAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
};

export default Body;