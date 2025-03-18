import React from 'react';
import images from '../assets/images';

const PropertyForm = ({ formData, currentStep, handleChange, handleSubmit, handleNext, handleBack, isLoading, error }) => {
  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="space-y-4" id="PropertyForm_1">
            <div>
              <label className="block text-sm font-medium text-gray-700">Property Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Property Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4" id="PropertyForm_2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
              <input
                type="number"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Bathrooms</label>
              <input
                type="number"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Area (sq ft)</label>
              <input
                type="number"
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4" id="PropertyForm_3">
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4" id="PropertyForm_4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Upload Photos</label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleChange}
                className="mt-1 block w-full"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-sm rounded-lg p-6" id="PropertyForm_5">
      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-md mb-4" id="PropertyForm_6">
          {error}
        </div>
      )}
      
      {renderStep()}
      
      <div className="mt-6 flex justify-between" id="PropertyForm_7">
        {currentStep > 1 && (
          <button
            type="button"
            onClick={handleBack}
            className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
          >
            Back
          </button>
        )}
        {currentStep < 4 ? (
          <button
            type="button"
            onClick={handleNext}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 ml-auto"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 ml-auto disabled:bg-blue-300"
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        )}
      </div>
    </form>
  );
};

export default PropertyForm;