import React from 'react';

const PropertyHeader = ({ currentStep }) => {
  const steps = ['Basic Info', 'Details', 'Location', 'Photos'];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-8" id="PropertyHeader_1">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6" id="PropertyHeader_2">Add New Property</h1>
      <div className="flex justify-between items-center" id="PropertyHeader_3">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center" id={`PropertyHeader_${index + 4}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
              {index + 1}
            </div>
            <span className="ml-2 text-sm font-medium text-gray-900">{step}</span>
            {index < steps.length - 1 && (
              <div className="w-12 h-1 bg-gray-200 mx-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyHeader;