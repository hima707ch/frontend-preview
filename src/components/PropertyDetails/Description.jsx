import React from 'react';

const Description = ({ description }) => {
  return (
    <div id="Description_1" className="prose max-w-none">
      <h2 id="Description_2" className="text-2xl font-semibold mb-4">Description</h2>
      <p id="Description_3" className="text-gray-700">{description}</p>
    </div>
  );
};

export default Description;