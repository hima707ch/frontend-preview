import React from 'react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Analytics Dashboard',
      price: '$99.99',
      description: 'Advanced analytics solution with real-time monitoring',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3'
    },
    {
      id: 2,
      name: 'Data Visualization Tool',
      price: '$79.99',
      description: 'Interactive charts and graphs for better insights',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3'
    },
    {
      id: 3,
      name: 'Report Generator Pro',
      price: '$149.99',
      description: 'Automated report generation with custom templates',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3'
    }
  ];

  return (
    <div id="FeaturedProducts_1" className="bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div id="FeaturedProducts_2" className="max-w-7xl mx-auto">
        <h2 id="FeaturedProducts_3" className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Products</h2>
        <div id="FeaturedProducts_4" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} id="FeaturedProducts_5" className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
              <div id="FeaturedProducts_6" className="relative h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div id="FeaturedProducts_7" className="p-6">
                <h3 id="FeaturedProducts_8" className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p id="FeaturedProducts_9" className="text-gray-600 mb-4">{product.description}</p>
                <div id="FeaturedProducts_10" className="flex items-center justify-between">
                  <span id="FeaturedProducts_11" className="text-2xl font-bold text-indigo-600">{product.price}</span>
                  <button id="FeaturedProducts_12" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;