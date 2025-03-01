import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    image: images[0],
    content: 'This product has completely transformed our workflow. The efficiency and ease of use are remarkable!'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Tech Lead',
    image: images[1],
    content: 'Outstanding service and support. The team goes above and beyond to ensure customer satisfaction.'
  },
  {
    id: 3,
    name: 'Emma Davis',
    role: 'CEO',
    image: images[2],
    content: 'A game-changer for our business. The ROI weve seen is incredible. Highly recommended!'
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div id="TestimonialsCarousel_1" className="w-full py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="TestimonialsCarousel_2" className="text-4xl font-bold text-center mb-12 text-gray-800">What Our Clients Say</h2>
        
        <div id="TestimonialsCarousel_3" className="relative">
          <div className="flex items-center justify-center">
            <button
              id="TestimonialsCarousel_4"
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div id="TestimonialsCarousel_5" className="w-full max-w-3xl">
              <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-500">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-blue-100"
                  />
                  <p id="TestimonialsCarousel_6" className="text-xl text-gray-600 italic mb-6">"{testimonials[currentIndex].content}"</p>
                  <h3 id="TestimonialsCarousel_7" className="text-xl font-semibold text-gray-800">{testimonials[currentIndex].name}</h3>
                  <p id="TestimonialsCarousel_8" className="text-blue-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>

            <button
              id="TestimonialsCarousel_9"
              onClick={nextSlide}
              className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div id="TestimonialsCarousel_10" className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;