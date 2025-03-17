import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import images from '../assets/images';

const ListingPage = () => {
  const [property, setProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching property:', error);
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  const handleInquiryChange = (e) => {
    setInquiryForm({
      ...inquiryForm,
      [e.target.name]: e.target.value
    });
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the inquiry to your backend
    console.log('Inquiry submitted:', inquiryForm);
    setInquiryForm({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  if (loading) {
    return (
      <div id="ListingPage_1" className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!property) {
    return (
      <div id="ListingPage_2" className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-gray-600">Property not found</p>
      </div>
    );
  }

  return (
    <div id="ListingPage_3" className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div id="ListingPage_4" className="relative">
          <img
            src={property.images?.[currentImageIndex] || images[0]}
            alt={`Property ${currentImageIndex + 1}`}
            className="w-full h-[500px] object-cover rounded-lg"
          />
          <div className="flex justify-between mt-4 gap-2 overflow-x-auto">
            {(property.images || images).slice(0, 4).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-24 h-24 object-cover rounded cursor-pointer ${currentImageIndex === index ? 'border-2 border-blue-500' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        <div id="ListingPage_5" className="space-y-6">
          <h1 className="text-3xl font-bold">{property.title}</h1>
          <p className="text-2xl text-blue-600 font-semibold">${property.price?.toLocaleString()}</p>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Location</h2>
            <p className="text-gray-600">
              {property.location?.address}, {property.location?.city}, {property.location?.state} {property.location?.zipCode}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-gray-600">{property.description}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Features</h2>
            <ul className="grid grid-cols-2 gap-2">
              {property.features?.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div id="ListingPage_6" className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Inquire About This Property</h2>
            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={inquiryForm.name}
                  onChange={handleInquiryChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={inquiryForm.email}
                  onChange={handleInquiryChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={inquiryForm.phone}
                  onChange={handleInquiryChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={inquiryForm.message}
                  onChange={handleInquiryChange}
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;