import React, { useState } from 'react';
import images from '../assets/images';

const PropertyDetailModalComponent = ({ property, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    date: '',
    message: ''
  });

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });
      if (response.ok) {
        setIsBookingFormOpen(false);
        alert('Booking request sent successfully!');
      }
    } catch (error) {
      console.error('Booking failed:', error);
    }
  };

  return (
    <div id="PropertyDetailModal_1" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-4xl max-h-90vh overflow-y-auto">
        <div className="relative">
          <button
            id="PropertyDetailModal_2"
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-600 hover:text-gray-900 text-2xl"
          >
            ×
          </button>
          
          <div className="p-6">
            <div id="PropertyDetailModal_3" className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <img
                  src={property?.image || images[0]}
                  alt={property?.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div id="PropertyDetailModal_4" className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{property?.title || 'Luxury Villa'}</h2>
                <p className="text-2xl text-blue-600 font-semibold mb-4">${property?.price || '1,200,000'}</p>
                
                <div className="flex gap-4 mb-6">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                    {property?.bedrooms || 4} beds
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                    {property?.bathrooms || 3} baths
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                    {property?.sqft || '2,500'} sqft
                  </span>
                </div>

                <button
                  id="PropertyDetailModal_5"
                  onClick={() => setIsBookingFormOpen(true)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Schedule Viewing
                </button>
              </div>
            </div>

            <div id="PropertyDetailModal_6" className="mt-8">
              <div className="flex gap-4 border-b mb-6">
                <button
                  className={`pb-2 px-4 ${activeTab === 'overview' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button
                  className={`pb-2 px-4 ${activeTab === 'features' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('features')}
                >
                  Features
                </button>
                <button
                  className={`pb-2 px-4 ${activeTab === 'location' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('location')}
                >
                  Location
                </button>
              </div>

              <div id="PropertyDetailModal_7" className="mt-4">
                {activeTab === 'overview' && (
                  <p className="text-gray-600 leading-relaxed">
                    {property?.description || 'This stunning luxury villa offers modern living at its finest. Featuring open concept living spaces, high-end finishes, and spectacular views. Perfect for families looking for their dream home.'}
                  </p>
                )}
                {activeTab === 'features' && (
                  <ul className="grid grid-cols-2 gap-4 text-gray-600">
                    <li>✓ Gourmet Kitchen</li>
                    <li>✓ Swimming Pool</li>
                    <li>✓ Smart Home System</li>
                    <li>✓ Home Theater</li>
                    <li>✓ Wine Cellar</li>
                    <li>✓ 3-Car Garage</li>
                  </ul>
                )}
                {activeTab === 'location' && (
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    [Map Component Placeholder]
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {isBookingFormOpen && (
          <div id="PropertyDetailModal_8" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60">
            <div className="bg-white rounded-lg p-6 w-96">
              <h3 className="text-2xl font-bold mb-4">Schedule a Viewing</h3>
              <form onSubmit={handleBookingSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full mb-4 p-2 border rounded"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full mb-4 p-2 border rounded"
                  value={bookingData.email}
                  onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                  required
                />
                <input
                  type="date"
                  className="w-full mb-4 p-2 border rounded"
                  value={bookingData.date}
                  onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                  required
                />
                <textarea
                  placeholder="Message"
                  className="w-full mb-4 p-2 border rounded"
                  value={bookingData.message}
                  onChange={(e) => setBookingData({...bookingData, message: e.target.value})}
                  rows="4"
                ></textarea>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsBookingFormOpen(false)}
                    className="flex-1 bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetailModalComponent;