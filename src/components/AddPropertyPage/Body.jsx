import React from 'react';
import PropertyForm from './PropertyForm';
import useAddProperty from './useAddProperty';

export default function Body() {
  const { isLoading, error, handleSubmit } = useAddProperty();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" id="Body_1">
      <div className="max-w-md w-full mx-auto space-y-8" id="Body_2">
        <div id="Body_3">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900" id="Body_4">
            Add New Property
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600" id="Body_5">
            List your property for potential buyers
          </p>
        </div>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" id="Body_6">
            {error}
          </div>
        )}
        
        <PropertyForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
}