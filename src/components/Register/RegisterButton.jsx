import React, { useState } from 'react';

const RegisterButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      id="RegisterButton_1"
      className={`relative overflow-hidden px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 ${isHovered ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-blue-600 to-purple-600'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">
        Register Now
      </span>
      <div
        id="RegisterButton_2"
        className={`absolute inset-0 transform transition-transform duration-300 ${isHovered ? 'scale-x-100' : 'scale-x-0'} origin-left bg-gradient-to-r from-pink-600 to-purple-600`}
      />
      <div
        id="RegisterButton_3"
        className="absolute -inset-1 blur-lg opacity-30 bg-gradient-to-r from-blue-600 to-purple-600"
      />
    </button>
  );
};

export default RegisterButton;