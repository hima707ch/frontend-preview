import React, { useState } from 'react';

const AdminControls = ({ onDelete, onEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({
    title: '',
    description: '',
    price: '',
    location: ''
  });

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editData);
    setEditMode(false);
  };

  return (
    <div id="AdminControls_1" className="bg-white rounded-lg shadow-md p-6">
      <h2 id="AdminControls_2" className="text-2xl font-bold mb-4">Property Management</h2>
      
      {editMode ? (
        <form id="AdminControls_3" onSubmit={handleEditSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={editData.title}
            onChange={(e) => setEditData({...editData, title: e.target.value})}
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Description"
            value={editData.description}
            onChange={(e) => setEditData({...editData, description: e.target.value})}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Price"
            value={editData.price}
            onChange={(e) => setEditData({...editData, price: e.target.value})}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Location"
            value={editData.location}
            onChange={(e) => setEditData({...editData, location: e.target.value})}
            className="w-full p-2 border rounded"
          />
          <div className="flex space-x-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
            <button type="button" onClick={() => setEditMode(false)} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Cancel</button>
          </div>
        </form>
      ) : (
        <div id="AdminControls_4" className="flex space-x-4">
          <button onClick={() => setEditMode(true)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit Property</button>
          <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete Property</button>
        </div>
      )}
    </div>
  );
};

export default AdminControls;