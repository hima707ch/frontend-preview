import React, { useState, useEffect } from 'react';
import { FaUserTie, FaBalanceScale, FaHeadset } from 'react-icons/fa';
import images from '../assets/images';

const Feature = () => {
  const [features, setFeatures] = useState([
    {
      id: 'Feature_1',
      icon: <FaUserTie className="text-4xl text-blue-500" />,
      title: 'Certified Agents',
      description: 'Our team of certified real estate agents are experts in their field, providing top-notch service and guidance throughout the buying or selling process.'
    },
    {
      id: 'Feature_2',
      icon: <FaBalanceScale className="text-4xl text-blue-500" />,
      title: 'Legal Assistance',
      description: 'We offer comprehensive legal assistance for all your real estate transactions, ensuring a smooth and hassle-free experience.'
    },
    {
      id: 'Feature_3', 
      icon: <FaHeadset className="text-4xl text-blue-500" />,
      title: '24/7 Support',
      description: 'Our dedicated support team is available 24/7 to answer any questions and address any concerns you may have throughout the process.'
    }
  ]);

  const [formData, setFormData] = useState({
    title: '',
    address: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    squareFootage: '',
    description: '',
    images: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/listings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Property added successfully!');
        setFormData({
          title: '',
          address: '',
          price: '',
          bedrooms: '',
          bathrooms: '',
          squareFootage: '',
          description: '',
          images: []
        });
      }
    } catch (error) {
      console.error('Error adding property:', error);
      alert('Failed to add property');
    }
  };

  useEffect(() => {
    const fetchPopularServices = async () => {
      try {
        const response = await fetch('/api/listings');
        const data = await response.json();
        const popularServices = analyzePopularServices(data);
        setFeatures(popularServices);
      } catch (error) {
        console.error('Error fetching popular services:', error);
      }
    };

    fetchPopularServices();
  }, []);

  const analyzePopularServices = (data) => {
    return features;
  };

  return (
    <section className="bg-gray-100 py-16" id="Feature_4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center" id="Feature_5">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300" id={feature.id}>
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Add New Property</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Bedrooms</label>
                <input
                  type="number"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Bathrooms</label>
                <input
                  type="number"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Square Footage</label>
                <input
                  type="number"
                  name="squareFootage"
                  value={formData.squareFootage}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Add Property
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <img src={images[Math.floor(Math.random() * images.length)]} alt="Real Estate" className="w-full max-w-4xl rounded-lg shadow-lg" id="Feature_6" />
      </div>
    </section>
  );
};

export default Feature;