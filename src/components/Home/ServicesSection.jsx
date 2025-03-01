import React from 'react';
import images from '../assets/images';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom web solutions tailored to your business needs with modern technologies.',
      icon: images[0]
    },
    {
      id: 2,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: images[1]
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance user experience and engagement.',
      icon: images[2]
    },
    {
      id: 4,
      title: 'Cloud Services',
      description: 'Scalable cloud solutions for your growing business needs.',
      icon: images[3]
    }
  ];

  return (
    <section id="ServicesSection_1" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="ServicesSection_2" className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p id="ServicesSection_3" className="text-lg text-gray-600 max-w-2xl mx-auto">We provide comprehensive digital solutions to help your business thrive in the modern world.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={`ServicesSection_${service.id + 3}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                <img src={service.icon} alt={service.title} className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button
            id="ServicesSection_8"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;