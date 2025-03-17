import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import images from '../assets/images';

const Dashboard = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/properties', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProperties(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch properties');
      setLoading(false);
    }
  };

  const handleDelete = async (propertyId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/api/properties/${propertyId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProperties(properties.filter(prop => prop._id !== propertyId));
      setShowDeleteModal(false);
    } catch (err) {
      setError('Failed to delete property');
    }
  };

  if (loading) return <div id="Dashboard_1" className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div id="Dashboard_2" className="text-red-500 text-center mt-4">{error}</div>;

  return (
    <div id="Dashboard_3" className="container mx-auto px-4 py-8">
      <div id="Dashboard_4" className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Properties</h1>
        <button
          id="Dashboard_5"
          onClick={() => navigate('/add-property')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Add New Property
        </button>
      </div>

      <div id="Dashboard_6" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property._id}
            id="Dashboard_7"
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={images[0] || 'https://via.placeholder.com/300x200'}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
              <p className="text-gray-600 mb-2">{property.description}</p>
              <p className="text-green-600 font-semibold mb-2">${property.price}</p>
              <p className="text-gray-500 mb-4">{property.location}</p>
              
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => navigate(`/edit-property/${property._id}`)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    setSelectedPropertyId(property._id);
                    setShowDeleteModal(true);
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showDeleteModal && (
        <div id="Dashboard_8" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Confirm Deletion</h3>
            <p>Are you sure you want to delete this property?</p>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(selectedPropertyId)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;