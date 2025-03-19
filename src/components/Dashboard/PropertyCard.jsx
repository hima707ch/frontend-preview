import React, { useState } from 'react';
import images from '../assets/images';

const PropertyCard = ({ property, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProperty, setEditedProperty] = useState(property);

  const handleSubmit = () => {
    onEdit(property.id, editedProperty);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div id="PropertyCard_1" className="bg-white p-4 rounded-lg shadow-md">
        <input
          id="PropertyCard_2"
          type="text"
          value={editedProperty.title}
          onChange={(e) => setEditedProperty({...editedProperty, title: e.target.value})}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          id="PropertyCard_3"
          type="number"
          value={editedProperty.price}
          onChange={(e) => setEditedProperty({...editedProperty, price: e.target.value})}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          id="PropertyCard_4"
          type="text"
          value={editedProperty.location}
          onChange={(e) => setEditedProperty({...editedProperty, location: e.target.value})}
          className="w-full mb-2 p-2 border rounded"
        />
        <textarea
          id="PropertyCard_5"
          value={editedProperty.description}
          onChange={(e) => setEditedProperty({...editedProperty, description: e.target.value})}
          className="w-full mb-2 p-2 border rounded"
        />
        <div id="PropertyCard_6" className="flex justify-end space-x-2">
          <button
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="PropertyCard_7" className="bg-white p-4 rounded-lg shadow-md">
      <img id="PropertyCard_8" src={images[1]} alt={property.title} className="w-full h-48 object-cover rounded mb-4" />
      <h3 id="PropertyCard_9" className="text-xl font-semibold mb-2">{property.title}</h3>
      <p id="PropertyCard_10" className="text-gray-600 mb-2">${property.price}</p>
      <p id="PropertyCard_11" className="text-gray-600 mb-2">{property.location}</p>
      <p id="PropertyCard_12" className="text-gray-600 mb-4">{property.description}</p>
      <div id="PropertyCard_13" className="flex justify-end space-x-2">
        <button
          onClick={() => setIsEditing(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(property.id)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;