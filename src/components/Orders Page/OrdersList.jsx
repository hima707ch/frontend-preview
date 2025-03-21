import React from 'react';

const OrdersList = ({ orders, onDelete }) => {
  return (
    <div id="OrdersList_1" className="bg-white rounded-lg shadow p-6">
      <h2 id="OrdersList_2" className="text-xl font-semibold mb-4">Orders List</h2>
      <div id="OrdersList_3" className="space-y-4">
        {orders.map((order) => (
          <div key={order._id} id={`OrdersList_${order._id}`} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">Order ID: {order._id}</p>
                <p className="text-gray-600">Status: {order.status}</p>
                <p className="text-gray-600">Total: ${order.totalAmount}</p>
              </div>
              <button
                onClick={() => onDelete(order._id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
            <div className="mt-2">
              <p className="font-medium">Products:</p>
              <ul className="list-disc list-inside">
                {order.products.map((item, index) => (
                  <li key={index} className="text-gray-600">
                    {item.product} - Quantity: {item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersList;