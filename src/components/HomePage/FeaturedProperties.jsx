import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProperties = ({ properties }) => {
  return (
    <section id="FeaturedProperties_1" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={images[Math.floor(Math.random() * images.length)]} alt={property.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">${property.price}</span>
                  <Link to={`/properties/${property.id}`} className="text-blue-600 hover:text-blue-700">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;