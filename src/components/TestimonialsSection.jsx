import React from 'react';
import images from '../assets/images';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      company: 'Acme Inc.',
      quote: 'The product exceeded our expectations. It has revolutionized the way we work and significantly improved our productivity.',
      image: images[0]
    },
    {
      id: 2,
      name: 'Jane Smith',
      company: 'XYZ Corporation',
      quote: 'We have been using this service for the past year and couldn\'t be happier. The team is responsive, and the results are outstanding.',
      image: images[1]
    },
    {
      id: 3,
      name: 'Michael Johnson',
      company: 'Global Enterprises',
      quote: 'Partnering with this company has been a game-changer for our business. Their expertise and dedication have helped us achieve our goals.',
      image: images[2]
    }
  ];

  return (
    <section className="bg-gray-100 py-12" id="TestimonialsSection_1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8" id="TestimonialsSection_2">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6" id={`TestimonialsSection_${testimonial.id + 2}`}>
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" id={`TestimonialsSection_${testimonial.id + 5}`} />
                <div>
                  <p className="text-lg font-semibold" id={`TestimonialsSection_${testimonial.id + 8}`}>{testimonial.name}</p>
                  <p className="text-gray-600" id={`TestimonialsSection_${testimonial.id + 11}`}>{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-800" id={`TestimonialsSection_${testimonial.id + 14}`}>{testimonial.quote}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-3 gap-8">
            <img src={images[3]} alt="Partner Logo 1" className="w-32 h-auto" id="TestimonialsSection_18" />
            <img src={images[4]} alt="Partner Logo 2" className="w-32 h-auto" id="TestimonialsSection_19" />
            <img src={images[5]} alt="Partner Logo 3" className="w-32 h-auto" id="TestimonialsSection_20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
