import React from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const SearchResults = ({ properties, loading }) => {
  if (loading) {
    return (
      <div id="SearchResults_1" className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!properties.length) {
    return (
      <div id="SearchResults_2" className="text-center py-12">
        <p className="text-gray-500 text-lg">No properties found matching your criteria</p>
      </div>
    );
  }

  return (
    <div id="SearchResults_3" className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {properties.map((property, index) => (
        <div 
          key={property._id} 
          id={`SearchResults_4_${index}`}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={property.images[0] || images[0]}
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
            <p className="text-gray-600 mb-2">{property.location}</p>
            <p className="text-green-600 font-bold mb-4">${property.price.toLocaleString()}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{property.propertyType}</span>
              <Link
                to={`/property/${property._id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;