import React, { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../assets/images';

const DynamicPropertiesListing = () => {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('asc');
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 6;

  useEffect(() => {
    fetchProperties();
  }, [currentPage, sortOrder]);

  const fetchProperties = async () => {
    try {
      const response = await axios.get('/api/properties', {
        params: {
          page_number: currentPage,
          items_per_page: itemsPerPage,
          sort_order: sortOrder
        }
      });
      setProperties(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setLoading(false);
    }
  };

  const dummyProperties = [
    { id: 1, title: 'Luxury Villa', price: '$1,200,000', location: 'Beverly Hills', beds: 5, baths: 4, sqft: 4500, image: images[0] },
    { id: 2, title: 'Modern Apartment', price: '$500,000', location: 'Downtown', beds: 2, baths: 2, sqft: 1200, image: images[1] },
    { id: 3, title: 'Seaside Cottage', price: '$800,000', location: 'Malibu', beds: 3, baths: 2, sqft: 1800, image: images[2] },
    { id: 4, title: 'Mountain Retreat', price: '$950,000', location: 'Aspen', beds: 4, baths: 3, sqft: 2800, image: images[3] },
    { id: 5, title: 'Urban Loft', price: '$600,000', location: 'Manhattan', beds: 1, baths: 1, sqft: 950, image: images[4] },
    { id: 6, title: 'Country Estate', price: '$2,500,000', location: 'Hampshire', beds: 7, baths: 6, sqft: 8000, image: images[5] }
  ];

  return (
    <div id="DynamicPropertiesListing_1" className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Featured Properties</h1>
        <select
          id="DynamicPropertiesListing_2"
          className="px-4 py-2 border rounded-lg bg-white text-gray-700 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {loading ? (
        <div id="DynamicPropertiesListing_3" className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyProperties.map((property) => (
            <div
              key={property.id}
              id={`DynamicPropertiesListing_${property.id + 3}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="relative h-64">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full">
                  {property.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  {property.location}
                </p>
                <div className="flex justify-between text-gray-600">
                  <span><i className="fas fa-bed mr-2"></i>{property.beds} Beds</span>
                  <span><i className="fas fa-bath mr-2"></i>{property.baths} Baths</span>
                  <span><i className="fas fa-ruler-combined mr-2"></i>{property.sqft} sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div id="DynamicPropertiesListing_10" className="flex justify-center mt-8 space-x-2">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-lg bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 border rounded-lg bg-blue-500 text-white">
          {currentPage}
        </span>
        <button
          onClick={() => setCurrentPage(prev => prev + 1)}
          className="px-4 py-2 border rounded-lg bg-white text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DynamicPropertiesListing;