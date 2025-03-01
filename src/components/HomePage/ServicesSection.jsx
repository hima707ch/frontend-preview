import React from 'react';
import images from '../assets/images';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom web solutions tailored to your business needs with modern technologies and responsive design.',
      icon: images[0]
    },
    {
      id: 2,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experience.',
      icon: images[1]
    },
    {
      id: 3,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services to power your digital transformation journey.',
      icon: images[2]
    },
    {
      id: 4,
      title: 'UI/UX Design',
      description: 'Intuitive and engaging user interfaces that enhance user experience and drive conversions.',
      icon: images[3]
    }
  ];

  return (
    <section id="ServicesSection_1" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="ServicesSection_2" className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p id="ServicesSection_3" className="text-lg text-gray-600 max-w-2xl mx-auto">Discover our comprehensive range of services designed to help your business thrive in the digital world.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={`ServicesSection_${service.id + 3}`}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-100 flex items-center justify-center">
                <img src={service.icon} alt={service.title} className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            id="ServicesSection_8"
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;