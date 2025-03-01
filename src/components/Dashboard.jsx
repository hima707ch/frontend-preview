import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const Dashboard = () => {
  const [properties, setProperties] = useState([]);
  const [userSettings, setUserSettings] = useState({});

  useEffect(() => {
    // Fetch user's properties from API
    fetch('/api/properties')
      .then(response => response.json())
      .then(data => setProperties(data));

    // Fetch user settings from API
    fetch('/api/user-settings')
      .then(response => response.json())
      .then(data => setUserSettings(data));
  }, []);

  const handleAddProperty = () => {
    // Redirect to add property form
  };

  const handleEditProperty = (propertyId) => {
    // Redirect to edit property form with propertyId
  };

  const handleDeleteProperty = (propertyId) => {
    // Make API call to delete property
    fetch(`/api/properties/${propertyId}`, {
      method: 'DELETE'
    }).then(() => {
      // Remove deleted property from state
      setProperties(properties.filter(property => property.id !== propertyId));
    });
  };

  const handleUpdateSettings = (settings) => {
    // Make API call to update user settings
    fetch('/api/user-settings', {
      method: 'PUT',
      body: JSON.stringify(settings),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      // Update user settings in state
      setUserSettings(settings);
    });
  };

  return (
    <div className="container mx-auto mt-8" id="Dashboard_1">
      <h1 className="text-3xl font-bold mb-6" id="Dashboard_2">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="Dashboard_3">
        <div className="bg-white shadow-md rounded-lg p-6" id="Dashboard_4">
          <h2 className="text-xl font-semibold mb-4" id="Dashboard_5">My Properties</h2>
          {properties.length === 0 ? (
            <p id="Dashboard_6">No properties found.</p>
          ) : (
            <ul className="space-y-4" id="Dashboard_7">
              {properties.map(property => (
                <li key={property.id} className="flex items-center justify-between" id={`Dashboard_${property.id}`}>
                  <div id="Dashboard_9">
                    <img src={images[Math.floor(Math.random()*images.length)]} alt="Property" className="w-20 h-20 object-cover rounded-lg" id="Dashboard_10" />
                    <p className="text-lg font-semibold mt-2" id="Dashboard_11">{property.title}</p>
                  </div>
                  <div className="flex space-x-2" id="Dashboard_12">
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                      onClick={() => handleEditProperty(property.id)}
                      id="Dashboard_13"
                    >
                      Edit
                    </button>
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                      onClick={() => handleDeleteProperty(property.id)}
                      id="Dashboard_14"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <button
            className="mt-6 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600"
            onClick={handleAddProperty}
            id="Dashboard_15"
          >
            Add Property
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6" id="Dashboard_16">
          <h2 className="text-xl font-semibold mb-4" id="Dashboard_17">Account Settings</h2>
          <div className="space-y-4" id="Dashboard_18">
            <div id="Dashboard_19">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2" id="Dashboard_20">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={userSettings.name || ''}
                onChange={(e) => handleUpdateSettings({ ...userSettings, name: e.target.value })}
              />
            </div>
            <div id="Dashboard_21">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2" id="Dashboard_22">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={userSettings.email || ''}
                onChange={(e) => handleUpdateSettings({ ...userSettings, email: e.target.value })}
              />
            </div>
            {/* Add more settings fields */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
