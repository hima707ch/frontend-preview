import React from 'react';
import images from '../assets/images';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    image: images[0],
    date: 'December 15, 2023',
    content: 'Absolutely amazing service! The attention to detail and professional approach exceeded my expectations. Would highly recommend to anyone looking for top-notch solutions.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Tech Entrepreneur',
    image: images[1],
    date: 'November 28, 2023',
    content: 'Game-changing platform that has transformed how we operate. The efficiency gains and user experience are remarkable. Couldn\'t be happier with the results.',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Product Manager',
    image: images[2],
    date: 'January 5, 2024',
    content: 'Outstanding support and incredible features. This has been a fantastic investment for our company. The team behind this is truly exceptional.',
  }
];

const UserTestimonials = () => {
  return (
    <div id="UserTestimonials_1" className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 id="UserTestimonials_2" className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
        <div id="UserTestimonials_3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              id={`UserTestimonials_${testimonial.id + 3}`}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">{testimonial.date}</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserTestimonials;