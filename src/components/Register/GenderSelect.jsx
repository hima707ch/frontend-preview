import React, { useState } from 'react';

const GenderSelect = () => {
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div id="GenderSelect_1" className="flex flex-col items-center justify-center min-h-[300px] p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg">
      <h2 id="GenderSelect_2" className="text-3xl font-bold mb-8 text-gray-800">Select Your Gender</h2>
      <div id="GenderSelect_3" className="flex gap-6">
        <button
          id="GenderSelect_4"
          onClick={() => handleGenderSelect('male')}
          className={`flex flex-col items-center p-6 rounded-lg transition-all duration-300 ${selectedGender === 'male' ? 'bg-blue-500 text-white scale-105' : 'bg-white hover:bg-blue-50'} shadow-md hover:shadow-xl`}
        >
          <svg id="GenderSelect_5" className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C9.243 2 7 4.243 7 7v2h10V7c0-2.757-2.243-5-5-5zM9 11c-2.757 0-5 2.243-5 5v6h16v-6c0-2.757-2.243-5-5-5H9z" />
          </svg>
          <span id="GenderSelect_6" className="text-lg font-semibold">Male</span>
        </button>

        <button
          id="GenderSelect_7"
          onClick={() => handleGenderSelect('female')}
          className={`flex flex-col items-center p-6 rounded-lg transition-all duration-300 ${selectedGender === 'female' ? 'bg-pink-500 text-white scale-105' : 'bg-white hover:bg-pink-50'} shadow-md hover:shadow-xl`}
        >
          <svg id="GenderSelect_8" className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C9.243 2 7 4.243 7 7v2h10V7c0-2.757-2.243-5-5-5zM9 11c-2.757 0-5 2.243-5 5v6h16v-6c0-2.757-2.243-5-5-5H9z" />
          </svg>
          <span id="GenderSelect_9" className="text-lg font-semibold">Female</span>
        </button>

        <button
          id="GenderSelect_10"
          onClick={() => handleGenderSelect('other')}
          className={`flex flex-col items-center p-6 rounded-lg transition-all duration-300 ${selectedGender === 'other' ? 'bg-purple-500 text-white scale-105' : 'bg-white hover:bg-purple-50'} shadow-md hover:shadow-xl`}
        >
          <svg id="GenderSelect_11" className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C9.243 2 7 4.243 7 7v2h10V7c0-2.757-2.243-5-5-5zM9 11c-2.757 0-5 2.243-5 5v6h16v-6c0-2.757-2.243-5-5-5H9z" />
          </svg>
          <span id="GenderSelect_12" className="text-lg font-semibold">Other</span>
        </button>
      </div>
      {selectedGender && (
        <p id="GenderSelect_13" className="mt-6 text-lg text-gray-700 animate-fade-in">
          You selected: <span className="font-semibold capitalize">{selectedGender}</span>
        </p>
      )}
    </div>
  );
};

export default GenderSelect;