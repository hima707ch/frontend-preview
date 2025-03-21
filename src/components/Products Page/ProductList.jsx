import React, { useState } from 'react';
import images from '../assets/images';

const ProductList = ({ products, onDelete, onUpdate }) => {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleEdit = (product) => {
    setEditingId(product._id);
    setEditForm(product);
  };

  const handleSave = async (id) => {
    await onUpdate(id, editForm);
    setEditingId(null);
  };

  const handleChange = (e, field) => {
    setEditForm(prev => ({
      ...prev,
      [field]: field === 'price' || field === 'stock' ? Number(e.target.value) : e.target.value
    }));
  };

  return (
    <div id="ProductList_1" className="bg-white rounded-lg shadow p-6">
      <h2 id="ProductList_2" className="text-xl font-semibold mb-4">Products</h2>
      <div id="ProductList_3" className="space-y-4">
        {products.map((product, index) => (
          <div key={product._id} id={`ProductList_4_${index}`} className="border rounded-lg p-4">
            {editingId === product._id ? (
              <div id={`ProductList_5_${index}`} className="space-y-2">
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => handleChange(e, 'name')}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  value={editForm.description}
                  onChange={(e) => handleChange(e, 'description')}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="number"
                  value={editForm.price}
                  onChange={(e) => handleChange(e, 'price')}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="number"
                  value={editForm.stock}
                  onChange={(e) => handleChange(e, 'stock')}
                  className="w-full p-2 border rounded"
                />
                <div id={`ProductList_6_${index}`} className="flex space-x-2">
                  <button
                    onClick={() => handleSave(product._id)}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div id={`ProductList_7_${index}`} className="flex justify-between items-start">
                <div id={`ProductList_8_${index}`}>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-green-600">${product.price}</p>
                  <p className="text-gray-500">Stock: {product.stock}</p>
                </div>
                <div id={`ProductList_9_${index}`} className="space-x-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(product._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;