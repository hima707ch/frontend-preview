import React from 'react';
import RegistrationForm from './RegistrationForm';
import { useRegistration } from './useRegistration';

const Body = () => {
  const { handleSubmit, formData, handleChange, errors, isLoading } = useRegistration();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto space-y-8">
        <div>
          <h2 id="Body_1" className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p id="Body_2" className="mt-2 text-center text-sm text-gray-600">
            Join our real estate platform
          </p>
        </div>
        <RegistrationForm
          handleSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
          errors={errors}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default Body;