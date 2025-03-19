import React from 'react';
import RegistrationForm from './RegistrationForm';
import useRegister from './useRegister';

const RegisterPage = () => {
  const { handleSubmit, error, isLoading, success } = useRegister();

  return (
    <div id="RegisterPage_1" className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div id="RegisterPage_2" className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 id="RegisterPage_3" className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
      </div>

      <div id="RegisterPage_4" className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div id="RegisterPage_5" className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div id="RegisterPage_6" className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative">
              {error}
            </div>
          )}
          {success && (
            <div id="RegisterPage_7" className="mb-4 bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded relative">
              Registration successful! You can now login.
            </div>
          )}
          <RegistrationForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;