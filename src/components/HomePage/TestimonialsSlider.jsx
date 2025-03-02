import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const TestimonialsSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: images[0],
      quote: 'Finding our dream home was a breeze thanks to their exceptional service. The attention to detail and professionalism exceeded our expectations!'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Property Investor',
      image: images[1],
      quote: 'As a real estate investor, I appreciate their market insights and dedication. They've helped me secure multiple profitable properties.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'First-time Buyer',
      image: images[2],
      quote: 'The team made my first home buying experience smooth and stress-free. Their guidance throughout the process was invaluable.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="TestimonialsSlider_1" className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 id="TestimonialsSlider_2" className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Clients Say</h2>
        
        <div id="TestimonialsSlider_3" className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="w-full max-w-4xl mx-auto px-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-500 transform hover:scale-105">
                <div className="flex flex-col items-center">
                  <img
                    id="TestimonialsSlider_4"
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-indigo-100"
                  />
                  <div className="mt-4 text-center">
                    <p id="TestimonialsSlider_5" className="text-xl italic text-gray-600 mb-4">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <h3 id="TestimonialsSlider_6" className="text-lg font-semibold text-gray-800">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p id="TestimonialsSlider_7" className="text-indigo-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-indigo-400'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;