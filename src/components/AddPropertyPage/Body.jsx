import React from 'react';
import PropertyForm from './PropertyForm';
import { useAddProperty } from './useAddProperty';

const Body = () => {
  const { handleSubmit, isLoading, error } = useAddProperty();

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8" id="Body_1">
      <div className="max-w-3xl mx-auto" id="Body_2">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8" id="Body_3">Add New Property</h1>
        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" id="Body_4">{error}</div>}
        <PropertyForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Body;