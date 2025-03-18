import React from 'react';
import PropertyDetails from './PropertyDetails';
import PropertyGallery from './PropertyGallery';
import PropertyInfo from './PropertyInfo';
import ContactForm from './ContactForm';
import { usePropertyListing } from './usePropertyListing';

const Body = () => {
  const { property, loading, error } = usePropertyListing();

  if (loading) return <div id="Body_1" className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;
  if (!property) return <div id="Body_3" className="text-center p-4">Property not found</div>;

  return (
    <div id="Body_4" className="container mx-auto px-4 py-8">
      <PropertyDetails property={property} />
      <PropertyGallery images={property.images} />
      <PropertyInfo property={property} />
      <ContactForm propertyId={property.id} />
    </div>
  );
};

export default Body;