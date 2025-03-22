import React from 'react';
import RegisterForm from './RegisterForm';
import useRegister from './useRegister';

const Body = () => {
  const { handleSubmit, error, success } = useRegister();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50" id="Body_1">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md" id="Body_2">
        <h2 className="text-3xl font-bold text-center text-gray-900" id="Body_3">Register</h2>
        {error && <p className="text-red-500 text-center" id="Body_4">{error}</p>}
        {success && <p className="text-green-500 text-center" id="Body_5">{success}</p>}
        <RegisterForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Body;