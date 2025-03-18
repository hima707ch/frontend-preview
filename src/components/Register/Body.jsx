import React from 'react';
import RegisterForm from './RegisterForm';
import RegisterHero from './RegisterHero';
import { useRegister } from './useRegister';

const Body = () => {
  const { handleSubmit, loading, error, success } = useRegister();

  return (
    <div className="min-h-screen bg-gray-100" id="Body_1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <RegisterHero />
        <RegisterForm
          onSubmit={handleSubmit}
          loading={loading}
          error={error}
          success={success}
        />
      </div>
    </div>
  );
};

export default Body;