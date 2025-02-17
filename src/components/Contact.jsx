import React from 'react';export default function Contact() {  return (    <section className='bg-gray-100 py-16'>      <div className='container mx-auto px-4'>        <h2 className='text-4xl font-bold mb-8 text-center'>Contact Us</h2>        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>          <div>            <h3 className='text-2xl font-semibold mb-4'>Get in Touch</h3>            <form className='space-y-4'>              <div>                <label htmlFor='name' className='block text-gray-700 font-medium mb-2'>Name</label>                <input type='text' id='name' className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500' required />              </div>              <div>                <label htmlFor='email' className='block text-gray-700 font-medium mb-2'>Email</label>                <input type='email' id='email' className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500' required />              </div>              <div>                <label htmlFor='message' className='block text-gray-700 font-medium mb-2'>Message</label>                <textarea id='message' rows='4' className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500' required></textarea>              </div>              <button type='submit' className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-200'>Send Message</button>            </form>          </div>          <div>            <h3 className='text-2xl font-semibold mb-4'>Office Location</h3>            <div className='bg-white p-6 rounded shadow'>              <p className='text-gray-700'>                123 Real Estate Street<br />                City, State ZIP<br />                Phone: (123) 456-7890<br />                Email: <a href='mailto:info@realestateoffice.com' className='text-blue-500 hover:underline'>info@realestateoffice.com</a>              </p>              <div className='mt-6'>                <iframe                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1234567890!2d-73.98765432109876!3d40.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1234567890%3A0x1234567890123456!2sReal%20Estate%20Office!5e0!3m2!1sen!2sus!4v1621234567890123'                  width='100%'                  height='300'                  style={{ border: 0 }}                  allowFullScreen=''                  loading='lazy'                ></iframe>              </div>              <div className='mt-4'>                <a href='/customer-service' className='text-blue-500 hover:underline'>Customer Service</a> | <a href='/faq' className='text-blue-500 hover:underline'>FAQ</a>              </div>            </div>          </div>        </div>      </div>    </section>  );}