import React from 'react';
import PropertyForm from './PropertyForm';
import PropertyHeader from './PropertyHeader';
import { useAddProperty } from './useAddProperty';

const Body = () => {
  const { formData, currentStep, handleChange, handleSubmit, handleNext, handleBack, isLoading, error } = useAddProperty();

  return (
    <div className="min-h-screen bg-gray-50 py-8" id="Body_1">
      <PropertyHeader currentStep={currentStep} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" id="Body_2">
        <PropertyForm
          formData={formData}
          currentStep={currentStep}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleNext={handleNext}
          handleBack={handleBack}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
};

export default Body;