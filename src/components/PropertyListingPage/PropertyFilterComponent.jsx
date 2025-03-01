import React, { useState } from 'react';

const PropertyFilterComponent = () => {
  const [filters, setFilters] = useState({
    priceRange: '',
    propertyType: '',
    bedrooms: '',
    location: '',
    amenities: []
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAmenityChange = (amenity) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to filter properties can be implemented here
    console.log('Applying filters:', filters);
  };

  return (
    <div id="PropertyFilterComponent_1" className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <h2 id="PropertyFilterComponent_2" className="text-2xl font-bold text-gray-800 mb-6">Find Your Perfect Property</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div id="PropertyFilterComponent_3" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">Price Range</label>
            <select
              name="priceRange"
              value={filters.priceRange}
              onChange={handleFilterChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            >
              <option value="">Select Price Range</option>
              <option value="0-100000">$0 - $100,000</option>
              <option value="100000-300000">$100,000 - $300,000</option>
              <option value="300000-500000">$300,000 - $500,000</option>
              <option value="500000+">$500,000+</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">Property Type</label>
            <select
              name="propertyType"
              value={filters.propertyType}
              onChange={handleFilterChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            >
              <option value="">Select Property Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="townhouse">Townhouse</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">Bedrooms</label>
            <select
              name="bedrooms"
              value={filters.bedrooms}
              onChange={handleFilterChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            >
              <option value="">Select Bedrooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4+">4+ Bedrooms</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              placeholder="Enter location"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            />
          </div>
        </div>

        <div id="PropertyFilterComponent_4" className="space-y-3">
          <label className="block text-gray-700 font-medium">Amenities</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Pool', 'Gym', 'Parking', 'Garden', 'Security', 'Elevator', 'Balcony', 'Storage'].map(amenity => (
              <div key={amenity} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={amenity}
                  checked={filters.amenities.includes(amenity)}
                  onChange={() => handleAmenityChange(amenity)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor={amenity} className="text-gray-700">{amenity}</label>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-md hover:from-blue-600 hover:to-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
};

export default PropertyFilterComponent;