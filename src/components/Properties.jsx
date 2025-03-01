import React from 'react';
import images from '../assets/images';

const Properties = () => {
  return (
    <section className="bg-gray-100 py-16" id="Properties_1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight mb-8" id="Properties_2">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" id="Properties_3">
          {images.slice(0, 8).map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105" id={`Properties_${index+4}`}>
              <div className="relative pb-48 overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={image}
                  alt={`Property ${index + 1}`}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{`Property ${index + 1}`}</h3>
                <p className="mt-2 text-base text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra interdum mauris, et fringilla quam pellentesque sit amet.</p>
                <div className="mt-3 flex items-center">
                  <span className="text-lg font-semibold text-gray-900">${(index + 1) * 100},000</span>
                </div>
                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out"
                  >
                    More Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
