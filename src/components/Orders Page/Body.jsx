import React from 'react';
import OrdersList from './OrdersList';
import CreateOrderForm from './CreateOrderForm';
import useOrders from './useOrders';

const Body = () => {
  const { orders, loading, error, deleteOrder, createOrder } = useOrders();

  if (loading) return <div id="Body_1" className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="container mx-auto px-4 py-8">
      <h1 id="Body_4" className="text-3xl font-bold mb-8">Orders Management</h1>
      <div id="Body_5" className="grid md:grid-cols-2 gap-8">
        <OrdersList orders={orders} onDelete={deleteOrder} />
        <CreateOrderForm onSubmit={createOrder} />
      </div>
    </div>
  );
};

export default Body;