import React from 'react';
import useHomePage from './useHomePage';
import images from '../assets/images';

const HomePage = () => {
  const { properties, loading, error } = useHomePage();

  return (
    <div className="min-h-screen bg-gray-100">
      <header id="HomePage_1" className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">PropertyFinder</h1>
            <div className="flex space-x-4">
              <button id="HomePage_2" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Add Property</button>
              <button id="HomePage_3" className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition">Login</button>
              <button id="HomePage_4" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">Register</button>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        {loading && <div id="HomePage_5" className="text-center text-gray-600">Loading properties...</div>}
        {error && <div id="HomePage_6" className="text-center text-red-600">{error}</div>}

        <div id="HomePage_7" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <div key={property.id} id={`HomePage_${8 + index}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={images[index % images.length]} alt={property.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{property.title}</h2>
                <p className="text-gray-600 mt-2">{property.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-500">${property.price}</span>
                  <span className="text-sm text-gray-500">{property.location}</span>
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer id="HomePage_9" className="bg-gray-800 text-white mt-12">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold">PropertyFinder</h3>
              <p className="mt-2 text-gray-400">Find your dream property today</p>
            </div>
            <div className="flex flex-col space-y-2">
              <h4 className="text-lg font-semibold">Contact Us</h4>
              <p className="text-gray-400">Email: contact@propertyfinder.com</p>
              <p className="text-gray-400">Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;