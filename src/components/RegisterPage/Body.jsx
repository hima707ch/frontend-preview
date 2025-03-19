import React from 'react';
import RegistrationForm from './RegistrationForm';
import { useRegister } from './useRegister';

const Body = () => {
  const { handleSubmit, error, loading } = useRegister();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <RegistrationForm onSubmit={handleSubmit} error={error} loading={loading} />
      </div>
    </div>
  );
};

export default Body;