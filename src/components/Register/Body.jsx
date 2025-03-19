import React from 'react';
import RegistrationForm from './RegistrationForm';
import useRegister from './useRegister';

const Body = () => {
  const { handleSubmit, error, success, isLoading } = useRegister();

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8" id="Body_1">
      <div className="max-w-md w-full mx-auto space-y-8" id="Body_2">
        <div id="Body_3">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Join our real estate platform</p>
        </div>
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded" id="Body_4">
            Registration successful! You can now login.
          </div>
        )}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" id="Body_5">
            {error}
          </div>
        )}
        <RegistrationForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Body;