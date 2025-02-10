import React from 'react'; import TestimonialCard from './TestimonialCard'; const Testimonials = () => { const testimonials = [ { id: 1, name: 'John Doe', title: 'Happy Customer', content: 'I had an amazing experience with RealEstate. They helped me find my dream home within my budget.', avatar: 'https://example.com/avatar1.jpg' }, { id: 2, name: 'Jane Smith', title: 'Satisfied Client', content: 'The team at RealEstate was very professional and responsive. They made the entire process smooth and stress-free.', avatar: 'https://example.com/avatar2.jpg' }, ]; return ( <section className='bg-gray-100 py-20' id='33'> <div className='container mx-auto px-4' id='34'> <h2 className='text-3xl font-semibold mb-8' id='35'>What Our Clients Say</h2> <div className='grid grid-cols-1 md:grid-cols-2 gap-8' id='36'> {testimonials.map(testimonial => ( <TestimonialCard key={testimonial.id} testimonial={testimonial} /> ))} </div> </div> </section> ); }; export default Testimonials;