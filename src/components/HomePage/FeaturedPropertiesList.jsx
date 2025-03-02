import React, { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../assets/images';

const FeaturedPropertiesList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('/api/properties', {
          params: { isFeatured: true }
        });
        setProperties(response.data || getDummyProperties());
        setLoading(false);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setProperties(getDummyProperties());
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const getDummyProperties = () => [
    {
      id: 1,
      title: 'Luxury Beachfront Villa',
      price: '2,500,000',
      location: 'Malibu, CA',
      beds: 5,
      baths: 4,
      sqft: 4200,
      image: images[0] || 'https://example.com/luxury-villa.jpg'
    },
    {
      id: 2,
      title: 'Modern City Penthouse',
      price: '1,800,000',
      location: 'New York, NY',
      beds: 3,
      baths: 3,
      sqft: 2800,
      image: images[1] || 'https://example.com/penthouse.jpg'
    },
    {
      id: 3,
      title: 'Mountain View Estate',
      price: '3,200,000',
      location: 'Aspen, CO',
      beds: 6,
      baths: 5,
      sqft: 5500,
      image: images[2] || 'https://example.com/estate.jpg'
    }
  ];

  if (loading) {
    return (
      <div id="FeaturedPropertiesList_1" className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <section id="FeaturedPropertiesList_2" className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 id="FeaturedPropertiesList_3" className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Properties
        </h2>
        <div id="FeaturedPropertiesList_4" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              id={`FeaturedPropertiesList_${property.id + 4}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-64">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">${property.price}</p>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>{property.location}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.sqft} Sq.Ft.</span>
                </div>
                <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesList;