import React from "react";

import PropertyDetails from "./PropertyDetails";
import ImageGallery from "./ImageGallery";
import ContactForm from "./ContactForm";
import MapLocation from "./MapLocation";

const Body = () => {
  return (
    <div>
      <PropertyDetails />
      <ImageGallery />
      <ContactForm />
      <MapLocation />
    </div>
  );
};

export default Body;
