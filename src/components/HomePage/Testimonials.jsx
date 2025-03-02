import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('api/testimonials')
      .then(res => res.json())
      .then(data => setTestimonials(data))
      .catch(() => {
        setTestimonials([
          {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Marketing Director',
            location: 'New York, USA',
            image: images[0],
            text: 'The service exceeded all our expectations. The team was professional, responsive, and delivered outstanding results.'
          },
          {
            id: 2,
            name: 'Michael Chen',
            role: 'Tech Entrepreneur',
            location: 'San Francisco, USA',
            image: images[1],
            text: 'Incredible attention to detail and exceptional customer service. Would highly recommend to anyone looking for top-notch solutions.'
          },
          {
            id: 3,
            name: 'Emma Thompson',
            role: 'Creative Director',
            location: 'London, UK',
            image: images[2],
            text: 'Working with this team has been a game-changer for our business. Their innovative approach and dedication are unmatched.'
          }
        ]);
      });
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div id="Testimonials_1" className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 id="Testimonials_2" className="text-4xl font-bold text-center mb-12 text-gray-800">What Our Clients Say</h2>
        
        <div id="Testimonials_3" className="relative">
          <div className="flex justify-center items-center">
            <button
              id="Testimonials_4"
              onClick={prevSlide}
              className="absolute left-0 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div id="Testimonials_5" className="bg-white rounded-xl shadow-xl p-8 mx-16 max-w-3xl transform transition-all duration-500 hover:shadow-2xl">
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonials[currentSlide]?.image}
                  alt={testimonials[currentSlide]?.name}
                  className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-purple-200"
                />
                <p id="Testimonials_6" className="text-gray-600 text-lg italic mb-6">"{testimonials[currentSlide]?.text}"</p>
                <h3 id="Testimonials_7" className="text-xl font-semibold text-gray-800 mb-2">{testimonials[currentSlide]?.name}</h3>
                <p id="Testimonials_8" className="text-purple-600 font-medium mb-1">{testimonials[currentSlide]?.role}</p>
                <p id="Testimonials_9" className="text-gray-500">{testimonials[currentSlide]?.location}</p>
              </div>
            </div>

            <button
              id="Testimonials_10"
              onClick={nextSlide}
              className="absolute right-0 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div id="Testimonials_11" className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-purple-600 w-6' : 'bg-purple-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;