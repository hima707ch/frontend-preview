import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const PropertiesListing = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    minPrice: '',
    maxPrice: ''
  });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchProperties();
  }, [filters, currentPage]);

  const fetchProperties = async () => {
    try {
      const response = await fetch(`/api/properties/list?type=${filters.type}&location=${filters.location}&minPrice=${filters.minPrice}&maxPrice=${filters.maxPrice}&page=${currentPage}`);
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto py-8" id="PropertiesListing_1">
      <div className="mb-8" id="PropertiesListing_2">
        <h2 className="text-3xl font-bold mb-4">Property Listings</h2>
        <div className="flex flex-wrap gap-4" id="PropertiesListing_3">
          <input
            type="text"
            name="type"
            placeholder="Property Type"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.type}
            onChange={handleFilterChange}
            id="PropertiesListing_4"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.location}
            onChange={handleFilterChange}
            id="PropertiesListing_5"
          />
          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.minPrice}
            onChange={handleFilterChange}
            id="PropertiesListing_6"
          />
          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.maxPrice}
            onChange={handleFilterChange}
            id="PropertiesListing_7"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="PropertiesListing_8">
        {properties.map((property) => (
          <div key={property.id} className="bg-white shadow-md rounded-lg overflow-hidden" id="PropertiesListing_9">
            <img src={images[Math.floor(Math.random() * images.length)]} alt="Property" className="w-full h-48 object-cover" id="PropertiesListing_10" />
            <div className="p-4" id="PropertiesListing_11">
              <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
              <p className="text-gray-600 mb-4">{property.description}</p>
              <div className="flex justify-between items-center" id="PropertiesListing_12">
                <span className="text-lg font-bold">${property.price}</span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center" id="PropertiesListing_13">
        {Array.from({ length: Math.ceil(properties.length / 9) }, (_, index) => (
          <button
            key={index}
            className={`mx-2 px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertiesListing;
