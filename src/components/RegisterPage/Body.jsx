import React from 'react';
import RegistrationForm from './RegistrationForm';
import useRegister from './useRegister';

const Body = () => {
  const { handleRegister, isLoading, error } = useRegister();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8" id="Body_1">
      <div className="sm:mx-auto sm:w-full sm:max-w-md" id="Body_2">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900" id="Body_3">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600" id="Body_4">
          Join our platform as a buyer or seller
        </p>
      </div>
      {error && (
        <div className="sm:mx-auto sm:w-full sm:max-w-md mt-4" id="Body_5">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert" id="Body_6">
            {error}
          </div>
        </div>
      )}
      <RegistrationForm onSubmit={handleRegister} isLoading={isLoading} />
    </div>
  );
};

export default Body;