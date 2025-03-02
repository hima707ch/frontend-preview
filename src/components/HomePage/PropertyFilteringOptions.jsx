import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PropertyFilteringOptions = () => {
  const [filters, setFilters] = useState({
    priceRange: [0, 1000000],
    propertyType: '',
    location: '',
    bedrooms: '',
    bathrooms: '',
    amenities: []
  });

  const [properties, setProperties] = useState([]);

  const amenitiesList = ['Pool', 'Gym', 'Parking', 'Security', 'Garden', 'Elevator'];
  const propertyTypes = ['Apartment', 'House', 'Villa', 'Penthouse', 'Studio'];

  useEffect(() => {
    fetchProperties();
  }, [filters]);

  const fetchProperties = async () => {
    try {
      const queryParams = new URLSearchParams(filters);
      const response = await axios.get(`/api/properties?${queryParams}`);
      setProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handlePriceChange = (e, type) => {
    setFilters(prev => ({
      ...prev,
      priceRange: type === 'min' 
        ? [parseInt(e.target.value), prev.priceRange[1]]
        : [prev.priceRange[0], parseInt(e.target.value)]
    }));
  };

  const handleAmenityToggle = (amenity) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  return (
    <div id="PropertyFilteringOptions_1" className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto my-8">
      <h2 id="PropertyFilteringOptions_2" className="text-2xl font-semibold text-gray-800 mb-6">Filter Properties</h2>
      
      <div id="PropertyFilteringOptions_3" className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-gray-700 font-medium">Min Price</label>
            <input
              type="range"
              min="0"
              max="1000000"
              value={filters.priceRange[0]}
              onChange={(e) => handlePriceChange(e, 'min')}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-gray-600">${filters.priceRange[0].toLocaleString()}</span>
          </div>
          <div className="space-y-2">
            <label className="text-gray-700 font-medium">Max Price</label>
            <input
              type="range"
              min="0"
              max="1000000"
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceChange(e, 'max')}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-gray-600">${filters.priceRange[1].toLocaleString()}</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-gray-700 font-medium">Property Type</label>
          <select
            value={filters.propertyType}
            onChange={(e) => setFilters(prev => ({ ...prev, propertyType: e.target.value }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Types</option>
            {propertyTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-gray-700 font-medium">Location</label>
          <input
            type="text"
            value={filters.location}
            onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
            placeholder="Enter location"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-gray-700 font-medium">Bedrooms</label>
            <select
              value={filters.bedrooms}
              onChange={(e) => setFilters(prev => ({ ...prev, bedrooms: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Any</option>
              {[1,2,3,4,5].map(num => (
                <option key={num} value={num}>{num}+ Beds</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-gray-700 font-medium">Bathrooms</label>
            <select
              value={filters.bathrooms}
              onChange={(e) => setFilters(prev => ({ ...prev, bathrooms: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Any</option>
              {[1,2,3,4].map(num => (
                <option key={num} value={num}>{num}+ Baths</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-gray-700 font-medium">Amenities</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {amenitiesList.map(amenity => (
              <button
                key={amenity}
                onClick={() => handleAmenityToggle(amenity)}
                className={`p-2 rounded-lg border transition-all duration-200 ${filters.amenities.includes(amenity) ? 'bg-blue-500 text-white border-blue-500' : 'border-gray-300 hover:border-blue-500'}`}
              >
                {amenity}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setFilters({
            priceRange: [0, 1000000],
            propertyType: '',
            location: '',
            bedrooms: '',
            bathrooms: '',
            amenities: []
          })}
          className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-all duration-200"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default PropertyFilteringOptions;