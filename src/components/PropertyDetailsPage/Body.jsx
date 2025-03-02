import React from "react";

import PhotoGallery from "./PhotoGallery";
import PropertyDescription from "./PropertyDescription";
import AmenitiesList from "./AmenitiesList";
import PriceDetails from "./PriceDetails";
import ContactAgentForm from "./ContactAgentForm";

const Body = () => {
  return (
    <div>
      <PhotoGallery />
      <PropertyDescription />
      <AmenitiesList />
      <PriceDetails />
      <ContactAgentForm />
    </div>
  );
};

export default Body;
