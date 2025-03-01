import React, { useState } from 'react';
import images from '../assets/images';

const PropertyDetailModal = ({ property, onClose }) => {
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          propertyId: property.id,
          ...inquiryData
        })
      });
      if (response.ok) {
        alert('Inquiry sent successfully!');
        onClose();
      }
    } catch (error) {
      console.error('Error sending inquiry:', error);
    }
  };

  return (
    <div id="PropertyDetailModal_1" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div id="PropertyDetailModal_2" className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div id="PropertyDetailModal_3" className="p-6">
          <div id="PropertyDetailModal_4" className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">{property?.title || 'Luxury Villa'}</h2>
            <button onClick={onClose} className="text-gray-600 hover:text-gray-800 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div id="PropertyDetailModal_5" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div id="PropertyDetailModal_6" className="space-y-4">
              <img 
                src={property?.image || images[0]} 
                alt={property?.title} 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div id="PropertyDetailModal_7" className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Property Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <span className="text-gray-600">Price:</span>
                    <span className="ml-2 font-semibold">${property?.price || '850,000'}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600">Bedrooms:</span>
                    <span className="ml-2 font-semibold">{property?.bedrooms || 4}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600">Bathrooms:</span>
                    <span className="ml-2 font-semibold">{property?.bathrooms || 3}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600">Area:</span>
                    <span className="ml-2 font-semibold">{property?.area || '2500'} sq ft</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="PropertyDetailModal_8" className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  {property?.description || 'This stunning luxury villa offers modern living at its finest. Featuring high-end finishes, spacious rooms, and premium amenities. Perfect for families looking for comfort and style.'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-semibold">Send Inquiry</h3>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={inquiryData.name}
                    onChange={(e) => setInquiryData({...inquiryData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={inquiryData.email}
                    onChange={(e) => setInquiryData({...inquiryData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={inquiryData.message}
                    onChange={(e) => setInquiryData({...inquiryData, message: e.target.value})}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailModal;