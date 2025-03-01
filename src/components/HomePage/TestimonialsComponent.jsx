import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const TestimonialsComponent = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      image: images[0],
      content: 'Working with this team has been an absolute game-changer for our business. Their innovative solutions and dedication to excellence have helped us achieve remarkable results.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Tech Entrepreneur',
      image: images[1],
      content: 'The level of professionalism and expertise demonstrated by this company is outstanding. They truly understand our needs and deliver beyond expectations.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Project Manager',
      image: images[2],
      content: 'I am thoroughly impressed with their attention to detail and commitment to customer satisfaction. They have become an invaluable partner in our success.',
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="TestimonialsComponent_1" className="bg-gradient-to-br from-indigo-100 to-purple-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 id="TestimonialsComponent_2" className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Clients Say</h2>
        
        <div id="TestimonialsComponent_3" className="relative">
          <div className="flex justify-center items-center">
            <div className="w-full md:w-3/4 lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:scale-105">
                <div className="flex items-center mb-6">
                  <img
                    id="TestimonialsComponent_4"
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-purple-400"
                  />
                  <div className="ml-4">
                    <h3 id="TestimonialsComponent_5" className="text-xl font-semibold text-gray-800">{testimonials[currentIndex].name}</h3>
                    <p id="TestimonialsComponent_6" className="text-gray-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
                
                <p id="TestimonialsComponent_7" className="text-gray-700 text-lg italic mb-6">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div id="TestimonialsComponent_8" className="flex items-center">
                  {[...Array(testimonials[currentIndex].rating)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-6 h-6 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div id="TestimonialsComponent_9" className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-purple-600 w-6' : 'bg-purple-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsComponent;