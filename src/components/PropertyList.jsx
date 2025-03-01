import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyList = ({ properties = [
  {
    id: 1,
    title: 'Modern Apartment',
    price: '$250,000',
    location: 'Downtown',
    image: 'https://placehold.co/600x400'
  },
  {
    id: 2,
    title: 'Luxury Villa',
    price: '$750,000',
    location: 'Beachfront',
    image: 'https://placehold.co/600x400'
  },
  {
    id: 3,
    title: 'Cozy Cottage',
    price: '$180,000',
    location: 'Suburbs',
    image: 'https://placehold.co/600x400'
  }
] }) => {
  return (
    <section className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center transition duration-500 ease-in-out transform hover:scale-105 hover:text-blue-600">
        Featured Properties
      </h2>
      <p className="text-center text-gray-600 mb-8">Discover your perfect home from our carefully selected properties</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div
            key={property.id}
            className="opacity-0 transform scale-95 animate-fadeInUp hover:shadow-xl transition-shadow duration-300"
            style={{ animationDelay: `${properties.indexOf(property) * 100}ms` }}
          >
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          View All Properties
        </button>
      </div>
    </section>
  );
};

export default PropertyList;