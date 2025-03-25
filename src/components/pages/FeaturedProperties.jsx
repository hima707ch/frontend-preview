import React from 'react';

const FeaturedProperties = ({ properties }) => {
  return (
    <div id="FeaturedProperties_1">
      <h2 id="FeaturedProperties_2" className="text-3xl font-bold mb-6">Featured Properties</h2>
      <div id="FeaturedProperties_3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <div 
            key={property.id || index}
            id={`FeaturedProperties_4_${index}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              id={`FeaturedProperties_5_${index}`}
              src={property.image || images[1]}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div id={`FeaturedProperties_6_${index}`} className="p-4">
              <h3 id={`FeaturedProperties_7_${index}`} className="text-xl font-semibold mb-2">{property.title}</h3>
              <p id={`FeaturedProperties_8_${index}`} className="text-gray-600 mb-2">{property.location}</p>
              <p id={`FeaturedProperties_9_${index}`} className="text-blue-600 font-bold">${property.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;