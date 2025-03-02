import React from 'react';
import images from '../assets/images';

const ServiceInformationSection = () => {
  const services = [
    {
      id: 'ServiceInformationSection_1',
      title: 'Property Buying',
      description: 'Find your dream home with our extensive listings and expert guidance through the buying process.',
      icon: images[0],
      stats: '1000+ Properties Sold'
    },
    {
      id: 'ServiceInformationSection_2',
      title: 'Property Selling',
      description: 'Get the best value for your property with our market analysis and professional marketing strategies.',
      icon: images[1],
      stats: '98% Success Rate'
    },
    {
      id: 'ServiceInformationSection_3',
      title: 'Rental Services',
      description: 'Explore rental properties or list your property with our hassle-free rental management services.',
      icon: images[2],
      stats: '5000+ Happy Tenants'
    },
    {
      id: 'ServiceInformationSection_4',
      title: 'Property Consultation',
      description: 'Expert advice on real estate investments, property valuation, and market trends.',
      icon: images[3],
      stats: '24/7 Support'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="ServiceInformationSection_5" className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Premium Services
          </h2>
          <p id="ServiceInformationSection_6" className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we can help you achieve your real estate goals with our comprehensive services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="bg-blue-50 rounded-full px-4 py-2">
                  <span className="text-blue-600 font-medium">{service.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            id="ServiceInformationSection_7"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Learn More About Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceInformationSection;