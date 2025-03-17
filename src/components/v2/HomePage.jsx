import React, { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../assets/images';

const HomePage = () => {
  const [properties, setProperties] = useState([]);
  const [searchParams, setSearchParams] = useState({
    type: '',
    city: '',
    minPrice: '',
    maxPrice: ''
  });
  const [featuredProperties, setFeaturedProperties] = useState([]);

  useEffect(() => {
    fetchFeaturedProperties();
  }, []);

  const fetchFeaturedProperties = async () => {
    try {
      const response = await axios.get('/api/properties/search');
      setFeaturedProperties(response.data.slice(0, 6));
    } catch (error) {
      console.error('Error fetching featured properties:', error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('/api/properties/search', {
        params: searchParams
      });
      setProperties(response.data);
    } catch (error) {
      console.error('Error searching properties:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div id="HomePage_1" className="relative h-[600px] bg-cover bg-center" style={{backgroundImage: `url(${images[0]})`}}>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 id="HomePage_2" className="text-5xl font-bold mb-6">Find Your Dream Home</h1>
              <p id="HomePage_3" className="text-xl mb-8">Discover the perfect property that matches your lifestyle</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div id="HomePage_4" className="container mx-auto px-4 py-8 -mt-20 relative z-10">
        <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select
              id="HomePage_5"
              className="form-select p-3 border rounded"
              value={searchParams.type}
              onChange={(e) => setSearchParams({...searchParams, type: e.target.value})}
            >
              <option value="">Property Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
            </select>

            <input
              id="HomePage_6"
              type="text"
              placeholder="City"
              className="p-3 border rounded"
              value={searchParams.city}
              onChange={(e) => setSearchParams({...searchParams, city: e.target.value})}
            />

            <input
              id="HomePage_7"
              type="number"
              placeholder="Min Price"
              className="p-3 border rounded"
              value={searchParams.minPrice}
              onChange={(e) => setSearchParams({...searchParams, minPrice: e.target.value})}
            />

            <input
              id="HomePage_8"
              type="number"
              placeholder="Max Price"
              className="p-3 border rounded"
              value={searchParams.maxPrice}
              onChange={(e) => setSearchParams({...searchParams, maxPrice: e.target.value})}
            />
          </div>
          <button
            id="HomePage_9"
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Search Properties
          </button>
        </form>
      </div>

      {/* Featured Properties */}
      <div id="HomePage_10" className="container mx-auto px-4 py-16">
        <h2 id="HomePage_11" className="text-3xl font-bold mb-8 text-center">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <div
              key={property._id}
              id={`HomePage_${12 + index}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={property.images[0] || images[1]}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.location.city}, {property.location.state}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">${property.price.toLocaleString()}</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {property.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search Results */}
      {properties.length > 0 && (
        <div id="HomePage_18" className="container mx-auto px-4 py-16">
          <h2 id="HomePage_19" className="text-3xl font-bold mb-8">Search Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <div
                key={property._id}
                id={`HomePage_${20 + index}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={property.images[0] || images[2]}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-4">{property.location.city}, {property.location.state}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">${property.price.toLocaleString()}</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {property.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;