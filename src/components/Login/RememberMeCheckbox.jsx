import React, { useState } from 'react';

const RememberMeCheckbox = ({ onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div id="RememberMeCheckbox_1" className="flex items-center space-x-2 select-none">
      <div
        id="RememberMeCheckbox_2"
        className={`w-5 h-5 rounded border cursor-pointer transition-all duration-200 ${isChecked ? 'bg-blue-500 border-blue-500' : 'border-gray-300 hover:border-blue-400'} flex items-center justify-center`}
        onClick={handleCheckboxChange}
      >
        {isChecked && (
          <svg
            id="RememberMeCheckbox_3"
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <label
        id="RememberMeCheckbox_4"
        className="text-sm text-gray-600 cursor-pointer hover:text-gray-800 transition-colors duration-200"
        onClick={handleCheckboxChange}
      >
        Remember me
      </label>
    </div>
  );
};

export default RememberMeCheckbox;