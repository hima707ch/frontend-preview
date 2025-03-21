import React from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';
import useProducts from './useProducts';

const Body = () => {
  const { products, loading, error, handleDelete, handleUpdate, handleAdd } = useProducts();

  if (loading) return <div id="Body_1" className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="container mx-auto px-4 py-8">
      <h1 id="Body_4" className="text-3xl font-bold mb-8">Product Management</h1>
      <div id="Body_5" className="grid md:grid-cols-2 gap-8">
        <AddProductForm onAdd={handleAdd} />
        <ProductList 
          products={products}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      </div>
    </div>
  );
};

export default Body;