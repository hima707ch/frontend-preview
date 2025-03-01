import React from 'react';
import images from '../assets/images';

export default function ServicesSection() {
  const services = [
    {
      icon: images[0],
      title: 'Comprehensive Property Management',
      description: 'Our expert team handles all aspects of property management, from tenant screening and leasing to maintenance and financial reporting, ensuring your investment is in good hands.'
    },
    {
      icon: images[1],
      title: 'Buying Made Easy',
      description: 'Whether you\'re a first-time homebuyer or seasoned investor, our experienced agents guide you through the entire buying process, helping you find the perfect property at the right price.'
    },
    {
      icon: images[2],
      title: 'Sell Your Property Fast',
      description: 'Our targeted marketing strategies and extensive network of potential buyers ensure your property sells quickly and at top market value.'
    },
    {
      icon: images[3],
      title: 'Hassle-Free Renting',
      description: 'From finding the ideal rental property to signing the lease, our dedicated team makes the renting process smooth and stress-free for tenants.'
    }
  ];

  return (
    <section className="bg-gradient-to-r from-blue-100 to-green-100 py-16" id="ServicesSection_1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12" id="ServicesSection_2">
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" id="ServicesSection_3">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg" id={`ServicesSection_${4 + index}`}>
              <img src={service.icon} alt={service.title} className="h-16 w-16 mx-auto mb-4" id={`ServicesSection_${8 + index}`} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center" id={`ServicesSection_${12 + index}`}>{service.title}</h3>
              <p className="text-gray-600 text-center" id={`ServicesSection_${16 + index}`}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}