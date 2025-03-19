import React from 'react';
import { useDropzone } from 'react-dropzone';

const PropertyForm = ({ onSubmit, isLoading }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {'image/*': []},
    maxFiles: 5
  });

  return (
    <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" id="PropertyForm_1">
      <div className="mb-4" id="PropertyForm_2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="PropertyForm_3"
          type="text"
          name="title"
          placeholder="Property Title"
          required
        />
      </div>

      <div className="mb-4" id="PropertyForm_4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          id="PropertyForm_5"
          name="description"
          placeholder="Property Description"
          required
        />
      </div>

      <div className="mb-4" id="PropertyForm_6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">Location</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="PropertyForm_7"
          type="text"
          name="location"
          placeholder="Property Location"
          required
        />
      </div>

      <div className="mb-6" id="PropertyForm_8">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">Price</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="PropertyForm_9"
          type="number"
          name="price"
          placeholder="Property Price"
          required
        />
      </div>

      <div className="mb-6" id="PropertyForm_10">
        <label className="block text-gray-700 text-sm font-bold mb-2">Images</label>
        <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-gray-400">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between" id="PropertyForm_11">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Adding Property...' : 'Add Property'}
        </button>
      </div>
    </form>
  );
};

export default PropertyForm;