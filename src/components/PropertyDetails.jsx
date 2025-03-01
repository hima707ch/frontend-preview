import React, { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../assets/images';

const PropertyDetails = () => {
  const [property, setProperty] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [propertyFormData, setPropertyFormData] = useState({
    title: '',
    description: '',
    price: '',
    imageUrl: '',
    location: ''
  });

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`/properties/${1}`);
        setProperty(response.data);
      } catch (error) {
        console.error('Error fetching property details:', error);
      }
    };

    fetchProperty();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePropertyFormChange = (e) => {
    setPropertyFormData({ ...propertyFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/contact/send', formData);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handlePropertySubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/properties', propertyFormData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Property added successfully!');
      setPropertyFormData({
        title: '',
        description: '',
        price: '',
        imageUrl: '',
        location: ''
      });
    } catch (error) {
      console.error('Error adding property:', error);
      alert('Failed to add property. Please try again.');
    }
  };

  if (!property) {
    return <div id="PropertyDetails_1" className="text-center py-8">Loading property details...</div>;
  }

  return (
    <div id="PropertyDetails_2" className="container mx-auto py-8">
      <div id="PropertyDetails_3" className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div id="PropertyDetails_4" className="overflow-hidden rounded-lg shadow-lg">
          <img src={images[Math.floor(Math.random() * images.length)]} alt={property.title} className="w-full h-auto" />
          <div id="PropertyDetails_5" className="p-6">
            <h2 className="text-2xl font-bold mb-2">{property.title}</h2>
            <p className="text-gray-700 text-base">{property.description}</p>
            <div id="PropertyDetails_6" className="mt-4">
              <p><strong>Size:</strong> {property.size} sqft</p>
              <p><strong>Price:</strong> ${property.price}</p>
              <p><strong>Amenities:</strong></p>
              <ul className="list-disc list-inside">
                {property.amenities.map((amenity, index) => (
                  <li key={`amenity-${index}`}>{amenity}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div id="PropertyDetails_7">
          <h3 className="text-xl font-bold mb-4">Add New Property</h3>
          <form onSubmit={handlePropertySubmit} className="mb-8">
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={propertyFormData.title}
                onChange={handlePropertyFormChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
              <textarea
                id="description"
                name="description"
                value={propertyFormData.description}
                onChange={handlePropertyFormChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                rows="3"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={propertyFormData.price}
                onChange={handlePropertyFormChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="imageUrl" className="block text-gray-700 font-bold mb-2">Image URL</label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={propertyFormData.imageUrl}
                onChange={handlePropertyFormChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={propertyFormData.location}
                onChange={handlePropertyFormChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              Add Property
            </button>
          </form>

          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <div id="PropertyDetails_8" className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                required
              />
            </div>
            <div id="PropertyDetails_9" className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                required
              />
            </div>
            <div id="PropertyDetails_10" className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;