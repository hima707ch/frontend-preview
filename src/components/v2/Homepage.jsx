import React, { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../assets/images';

const Homepage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await axios.get('/api/properties');
      setProperties(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setLoading(false);
    }
  };

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  return (
    <div className="min-h-screen bg-gray-100" id="Homepage_1">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-cover bg-center" id="Homepage_2" style={{backgroundImage: `url(${images[0]})`}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-6" id="Homepage_3">Find Your Dream Property</h1>
            <p className="text-xl mb-8" id="Homepage_4">Discover the perfect place to call home</p>
            <div className="space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300" id="Homepage_5">Register Now</button>
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-full font-semibold transition duration-300" id="Homepage_6">Login</button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="container mx-auto px-4 py-16" id="Homepage_7">
        <h2 className="text-3xl font-bold text-center mb-12" id="Homepage_8">Featured Properties</h2>
        
        {loading ? (
          <div className="text-center" id="Homepage_9">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="Homepage_10">
              {currentProperties.map((property, index) => (
                <div key={property._id} className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl" id={`Homepage_11_${index}`}>
                  <img src={images[index % images.length]} alt={property.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                    <p className="text-gray-600 mb-4">{property.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 font-bold text-xl">${property.price.toLocaleString()}</span>
                      <span className="text-gray-500">{property.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12 space-x-2" id="Homepage_12">
              {Array.from({ length: Math.ceil(properties.length / propertiesPerPage) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                  id={`Homepage_13_${index}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16" id="Homepage_14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" id="Homepage_15">Ready to Find Your Perfect Property?</h2>
          <p className="text-xl mb-8" id="Homepage_16">Join thousands of satisfied customers who found their dream home with us</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300" id="Homepage_17">Get Started Today</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;