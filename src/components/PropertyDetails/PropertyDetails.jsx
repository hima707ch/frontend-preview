import React from 'react';
import Gallery from './Gallery';
import Description from './Description';
import Location from './Location';
import { usePropertyDetails } from './usePropertyDetails';

const PropertyDetails = () => {
  const { property, loading, error } = usePropertyDetails();

  if (loading) return <div id="PropertyDetails_1" className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div id="PropertyDetails_2" className="text-red-500 text-center p-4">{error}</div>;
  if (!property) return null;

  return (
    <div id="PropertyDetails_3" className="container mx-auto px-4 py-8">
      <h1 id="PropertyDetails_4" className="text-4xl font-bold mb-6">{property.title}</h1>
      <div id="PropertyDetails_5" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Gallery images={property.images} />
        <div id="PropertyDetails_6" className="space-y-6">
          <div id="PropertyDetails_7" className="text-3xl font-bold text-primary">
            ${property.price?.toLocaleString()}
          </div>
          <Description description={property.description} />
          <Location location={property.location} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;