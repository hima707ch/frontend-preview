import React from 'react';
import PropertyForm from './PropertyForm';
import usePropertyAdd from './usePropertyAdd';

const Body = () => {
  const { handleSubmit, isLoading, error, success } = usePropertyAdd();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" id="Body_1">
      <div className="max-w-md w-full mx-auto space-y-8" id="Body_2">
        <div id="Body_3">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add New Property</h2>
          <p className="mt-2 text-center text-sm text-gray-600">List your property for potential buyers</p>
        </div>
        <PropertyForm onSubmit={handleSubmit} isLoading={isLoading} />
        {error && <div className="text-red-600 text-center mt-2" id="Body_4">{error}</div>}
        {success && <div className="text-green-600 text-center mt-2" id="Body_5">{success}</div>}
      </div>
    </div>
  );
};

export default Body;