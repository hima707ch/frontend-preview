import React from 'react';
import images from '../assets/images';

const FeaturedProperties = ({ properties }) => {
  return (
    <div id="FeaturedProperties_1" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 id="FeaturedProperties_2" className="text-3xl font-extrabold text-gray-900 mb-8">Featured Properties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div
            key={property._id}
            id={`FeaturedProperties_${property._id}`}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
          >
            <img
              className="w-full h-48 object-cover"
              src={property.images?.[0] || images[1] || 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914'}
              alt={property.title}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
              <p className="text-gray-600 mb-4">{property.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">${property.price?.toLocaleString()}</span>
                <span className="text-sm text-gray-500">{property.location}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {property.features?.map((feature, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;