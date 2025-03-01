import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('api/products/featured')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => {
        // Fallback data
        setProducts([
          { id: 1, name: 'Premium Headphones', price: 299.99, rating: 4.8, image: images[0] },
          { id: 2, name: 'Smart Watch Pro', price: 199.99, rating: 4.7, image: images[1] },
          { id: 3, name: 'Wireless Earbuds', price: 149.99, rating: 4.9, image: images[2] },
          { id: 4, name: 'Gaming Console', price: 499.99, rating: 4.6, image: images[3] }
        ]);
      });
  }, []);

  return (
    <div id="FeaturedProducts_1" className="bg-gradient-to-r from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 id="FeaturedProducts_2" className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Featured Products
          <span className="block text-indigo-600 text-lg mt-2">Discover our top picks</span>
        </h2>
        
        <div id="FeaturedProducts_3" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div
              key={product.id}
              id={`FeaturedProducts_${product.id + 3}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="relative pb-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-gray-600">{product.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-600">${product.price}</span>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300">
                    Add to Cart
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