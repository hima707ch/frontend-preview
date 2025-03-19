import React from 'react';
import PropertyForm from './PropertyForm';
import Header from './Header';
import { useAddProperty } from './useAddProperty';

const Body = () => {
  const { handleSubmit, isLoading, error } = useAddProperty();

  return (
    <div className="min-h-screen bg-gray-100" id="Body_1">
      <Header />
      <main className="container mx-auto px-4 py-8" id="Body_2">
        <h1 className="text-3xl font-bold text-gray-800 mb-8" id="Body_3">Add New Property</h1>
        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" id="Body_4">{error}</div>}
        <PropertyForm onSubmit={handleSubmit} isLoading={isLoading} />
      </main>
    </div>
  );
};

export default Body;