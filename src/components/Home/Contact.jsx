import React from 'react';

export default function Contact() {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16" id="Contact_1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="Contact_2">
        <div className="text-center mb-12" id="Contact_3">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4" id="Contact_4">Get in Touch</h2>
          <p className="text-lg text-gray-600" id="Contact_5">Have questions about our products? We're here to help!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10" id="Contact_6">
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300" id="Contact_7">
            <form id="Contact_8">
              <div className="mb-6" id="Contact_9">
                <label className="block text-gray-700 text-sm font-semibold mb-2" id="Contact_10">Your Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" id="Contact_11" />
              </div>
              <div className="mb-6" id="Contact_12">
                <label className="block text-gray-700 text-sm font-semibold mb-2" id="Contact_13">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@example.com" id="Contact_14" />
              </div>
              <div className="mb-6" id="Contact_15">
                <label className="block text-gray-700 text-sm font-semibold mb-2" id="Contact_16">Message</label>
                <textarea className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32" placeholder="Your message here..." id="Contact_17"></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition duration-300" id="Contact_18">Send Message</button>
            </form>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8" id="Contact_19">
            <div className="space-y-8" id="Contact_20">
              <div className="flex items-start space-x-4" id="Contact_21">
                <div className="flex-shrink-0 bg-blue-100 p-4 rounded-full" id="Contact_22">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="Contact_23">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" id="Contact_24"></path>
                  </svg>
                </div>
                <div id="Contact_25">
                  <h3 className="font-semibold text-gray-900" id="Contact_26">Phone</h3>
                  <p className="mt-1 text-gray-600" id="Contact_27">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4" id="Contact_28">
                <div className="flex-shrink-0 bg-blue-100 p-4 rounded-full" id="Contact_29">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="Contact_30">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" id="Contact_31"></path>
                  </svg>
                </div>
                <div id="Contact_32">
                  <h3 className="font-semibold text-gray-900" id="Contact_33">Email</h3>
                  <p className="mt-1 text-gray-600" id="Contact_34">support@shopmart.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4" id="Contact_35">
                <div className="flex-shrink-0 bg-blue-100 p-4 rounded-full" id="Contact_36">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="Contact_37">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" id="Contact_38"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" id="Contact_39"></path>
                  </svg>
                </div>
                <div id="Contact_40">
                  <h3 className="font-semibold text-gray-900" id="Contact_41">Address</h3>
                  <p className="mt-1 text-gray-600" id="Contact_42">123 Shopping Avenue,<br />Retail District, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
