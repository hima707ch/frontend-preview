import React from 'react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: '$299.99',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: '$199.99',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      category: 'Wearables'
    },
    {
      id: 3,
      name: 'Designer Leather Bag',
      price: '$399.99',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa',
      category: 'Fashion'
    },
    {
      id: 4,
      name: 'Luxury Sunglasses',
      price: '$159.99',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f',
      category: 'Accessories'
    }
  ];

  return (
    <div id="FeaturedProducts_1" className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="FeaturedProducts_2" className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Featured Products</h2>
          <p className="mt-4 text-lg text-gray-500">Discover our handpicked selection of premium items</p>
        </div>
        
        <div id="FeaturedProducts_3" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} id="FeaturedProducts_4" className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 transition-opacity duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <span id="FeaturedProducts_5" className="text-sm font-medium text-indigo-600">{product.category}</span>
                <h3 className="mt-2 text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="mt-2 text-xl font-semibold text-gray-900">{product.price}</p>
                <button
                  id="FeaturedProducts_6"
                  className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;