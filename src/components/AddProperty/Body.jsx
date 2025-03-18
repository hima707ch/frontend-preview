import React from 'react';
import PropertyForm from './PropertyForm';
import Title from './Title';
import { useAddProperty } from './useAddProperty';

const Body = () => {
  const { handleSubmit, isLoading, error } = useAddProperty();

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Title />
        {error && <div className="text-red-500 text-center mb-4" id="Body_1">{error}</div>}
        <PropertyForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Body;