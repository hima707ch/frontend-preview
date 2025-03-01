import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const PriceDetails = () => {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await fetch('/api/cart/items');
      const data = await response.json();
      setItems(data);
      calculateTotal(data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const calculateTotal = (items) => {
    const sum = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotal(sum);
  };

  return (
    <div id="PriceDetails_1" className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto my-8">
      <h2 id="PriceDetails_2" className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Price Details</h2>
      
      <div id="PriceDetails_3" className="space-y-4">
        {items.map((item) => (
          <div key={item.id} id="PriceDetails_4" className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img src={images[0]} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
              <div>
                <p className="font-medium text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>
            <p className="font-semibold text-gray-800">${item.price * item.quantity}</p>
          </div>
        ))}

        <div id="PriceDetails_5" className="border-t pt-4 mt-6">
          <div className="flex justify-between items-center mb-3">
            <p className="text-gray-600">Subtotal</p>
            <p className="font-semibold text-gray-800">${total}</p>
          </div>
          <div className="flex justify-between items-center mb-3">
            <p className="text-gray-600">Shipping</p>
            <p className="font-semibold text-gray-800">$10.00</p>
          </div>
          <div className="flex justify-between items-center mb-3">
            <p className="text-gray-600">Tax</p>
            <p className="font-semibold text-gray-800">${(total * 0.1).toFixed(2)}</p>
          </div>
          
          <div id="PriceDetails_6" className="border-t pt-4 mt-4">
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold text-gray-800">Total</p>
              <p className="text-lg font-bold text-emerald-600">
                ${(total + 10 + (total * 0.1)).toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <button
          id="PriceDetails_7"
          className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold mt-6
            hover:bg-emerald-700 transition-colors duration-300 transform
            active:scale-98"
        >
          Proceed to Checkout
        </button>

        <p id="PriceDetails_8" className="text-center text-sm text-gray-500 mt-4">
          Free shipping on orders above $100
        </p>
      </div>
    </div>
  );
};

export default PriceDetails;