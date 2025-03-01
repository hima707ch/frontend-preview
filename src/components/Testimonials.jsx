import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/listings/:id');
      const data = await response.json();
      setTestimonials(data.reviews);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  const goToPreviousTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToNextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-16" id="Testimonials_1">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">What Our Customers Say</h2>
        {testimonials?.length > 0 && (
          <div className="relative">
            <div className="flex justify-center items-center mb-8">
              <img
                src={images[currentIndex % images.length]}
                alt="Customer"
                className="w-32 h-32 rounded-full object-cover border-4 border-white"
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-white mb-4">{testimonials[currentIndex].quote}</p>
              <p className="text-lg text-white font-bold">{testimonials[currentIndex].author}</p>
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-6 h-6 fill-current ${index < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-400'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 1L12.9 7.2L19 7.9L14.5 12.2L15.8 19L10 15.6L4.2 19L5.5 12.2L1 7.9L7.1 7.2L10 1Z" />
                  </svg>
                ))}
              </div>
            </div>
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
              onClick={goToPreviousTestimonial}
              id="Testimonials_2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
              onClick={goToNextTestimonial}
              id="Testimonials_3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
        <div className="mt-12 flex justify-center">
          <img src="/path/to/partner-logo-1.png" alt="Partner Logo 1" className="w-32 h-16 object-contain mx-4" id="Testimonials_4" />
          <img src="/path/to/partner-logo-2.png" alt="Partner Logo 2" className="w-32 h-16 object-contain mx-4" id="Testimonials_5" />
          <img src="/path/to/partner-logo-3.png" alt="Partner Logo 3" className="w-32 h-16 object-contain mx-4" id="Testimonials_6" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
