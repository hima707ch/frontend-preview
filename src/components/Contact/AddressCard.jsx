import React, { useState } from 'react';
import images from '../assets/images';

const AddressCard = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'Home',
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      isDefault: true
    },
    {
      id: 2,
      name: 'Office',
      street: '456 Business Ave',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
      isDefault: false
    }
  ]);

  const handleSetDefault = (id) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };

  return (
    <div id="AddressCard_1" className="p-6 max-w-4xl mx-auto">
      <h2 id="AddressCard_2" className="text-2xl font-bold mb-6 text-gray-800">Saved Addresses</h2>
      <div id="AddressCard_3" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((address) => (
          <div
            key={address.id}
            id={`AddressCard_${address.id + 3}`}
            className={`p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl ${address.isDefault ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-400' : 'bg-white'}`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-gray-800">{address.name}</span>
                {address.isDefault && (
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">Default</span>
                )}
              </div>
              <button
                onClick={() => handleSetDefault(address.id)}
                className={`text-sm ${address.isDefault ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:text-blue-700'}`}
                disabled={address.isDefault}
              >
                Set as Default
              </button>
            </div>
            <div className="space-y-2 text-gray-600">
              <p>{address.street}</p>
              <p>{`${address.city}, ${address.state} ${address.zipCode}`}</p>
            </div>
            <div className="mt-4 flex gap-3">
              <button className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Edit
              </button>
              <button className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Delete
              </button>
            </div>
          </div>
        ))}
        <div id="AddressCard_6" className="p-6 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-blue-400 transition-colors duration-300 cursor-pointer">
          <div className="text-center">
            <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="mt-2 block text-sm font-medium text-gray-600">Add New Address</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;