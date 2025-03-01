import React, { useState } from 'react';
import images from '../assets/images';

const PropertyDetailsModal = ({ isOpen, onClose, property }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, propertyId: property.id })
      });
      if (response.ok) {
        alert('Inquiry sent successfully!');
        onClose();
      }
    } catch (error) {
      console.error('Error sending inquiry:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div id="PropertyDetailsModal_1" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div id="PropertyDetailsModal_2" className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div id="PropertyDetailsModal_3" className="p-6">
          <div id="PropertyDetailsModal_4" className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">{property?.title || 'Luxury Beachfront Villa'}</h2>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div id="PropertyDetailsModal_5" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div id="PropertyDetailsModal_6" className="space-y-4">
              <img
                src={property?.image || images[0]}
                alt="Property"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div id="PropertyDetailsModal_7" className="grid grid-cols-2 gap-4">
                <div id="PropertyDetailsModal_8" className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Price</p>
                  <p className="text-xl font-bold text-gray-800">${property?.price || '1,500,000'}</p>
                </div>
                <div id="PropertyDetailsModal_9" className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Area</p>
                  <p className="text-xl font-bold text-gray-800">{property?.area || '3,500'} sqft</p>
                </div>
              </div>
              <div id="PropertyDetailsModal_10" className="space-y-2">
                <h3 className="text-xl font-semibold">Features</h3>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center text-gray-600"><span className="mr-2">✓</span>4 Bedrooms</li>
                  <li className="flex items-center text-gray-600"><span className="mr-2">✓</span>3 Bathrooms</li>
                  <li className="flex items-center text-gray-600"><span className="mr-2">✓</span>Swimming Pool</li>
                  <li className="flex items-center text-gray-600"><span className="mr-2">✓</span>Garden</li>
                </ul>
              </div>
            </div>

            <div id="PropertyDetailsModal_11" className="space-y-6">
              <div id="PropertyDetailsModal_12" className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-2">Description</h3>
                <p className="text-gray-600">
                  {property?.description || 'Luxurious beachfront villa with stunning ocean views. This property features modern architecture, high-end finishes, and resort-style amenities. Perfect for those seeking an exclusive lifestyle.'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-semibold">Inquire About This Property</h3>
                <div id="PropertyDetailsModal_13">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div id="PropertyDetailsModal_14">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div id="PropertyDetailsModal_15">
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div id="PropertyDetailsModal_16">
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
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

export default PropertyDetailsModal;