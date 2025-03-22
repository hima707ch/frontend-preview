import React from 'react';
import images from '../assets/images';

const PropertyList = ({ properties, onDelete, onEdit }) => {
  return (
    <div id="PropertyList_1" className="bg-white rounded-lg shadow p-6">
      <h2 id="PropertyList_2" className="text-2xl font-semibold mb-6">My Properties</h2>
      <div id="PropertyList_3" className="grid gap-6">
        {properties.map((property, index) => (
          <div key={property.id} id={`PropertyList_4_${index}`} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <img id={`PropertyList_5_${index}`} src={images[index % images.length]} alt={property.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 id={`PropertyList_6_${index}`} className="text-xl font-semibold">{property.title}</h3>
            <p id={`PropertyList_7_${index}`} className="text-gray-600 mb-2">{property.location}</p>
            <p id={`PropertyList_8_${index}`} className="text-green-600 font-bold mb-4">${property.price}</p>
            <div id={`PropertyList_9_${index}`} className="flex space-x-4">
              <button onClick={() => onEdit(property)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit</button>
              <button onClick={() => onDelete(property.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;