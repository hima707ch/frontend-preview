import React from 'react';
import images from '../assets/images';

const RegisterHero = () => {
  return (
    <div className="text-center mb-12" id="RegisterHero_1">
      <img
        src={images[0]}
        alt="Register Hero"
        className="mx-auto h-24 w-auto mb-6"
      />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Create Your Account
      </h1>
      <p className="text-lg text-gray-600">
        Join our community and discover amazing properties
      </p>
    </div>
  );
};

export default RegisterHero;