import React, { useState } from 'react';

const CreateOrderForm = ({ onSubmit }) => {
  const [products, setProducts] = useState([{ product: '', quantity: 1 }]);

  const handleAddProduct = () => {
    setProducts([...products, { product: '', quantity: 1 }]);
  };

  const handleProductChange = (index, field, value) => {
    const newProducts = [...products];
    newProducts[index][field] = value;
    setProducts(newProducts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalAmount = products.reduce((acc, curr) => acc + (curr.quantity * 10), 0);
    onSubmit({ products, totalAmount });
    setProducts([{ product: '', quantity: 1 }]);
  };

  return (
    <div id="CreateOrderForm_1" className="bg-white rounded-lg shadow p-6">
      <h2 id="CreateOrderForm_2" className="text-xl font-semibold mb-4">Create New Order</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {products.map((product, index) => (
          <div key={index} id={`CreateOrderForm_${index + 3}`} className="space-y-2">
            <input
              type="text"
              value={product.product}
              onChange={(e) => handleProductChange(index, 'product', e.target.value)}
              placeholder="Product name"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="number"
              value={product.quantity}
              onChange={(e) => handleProductChange(index, 'quantity', parseInt(e.target.value))}
              min="1"
              className="w-full p-2 border rounded"
              required
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddProduct}
          className="text-blue-500 hover:text-blue-700"
        >
          + Add Another Product
        </button>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Create Order
        </button>
      </form>
    </div>
  );
};

export default CreateOrderForm;