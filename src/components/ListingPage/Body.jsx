import React from "react";

import PropertyHeroSection from "./PropertyHeroSection";
import PropertyDetails from "./PropertyDetails";
import ImageGallery from "./ImageGallery";
import ContactAgentForm from "./ContactAgentForm";

const Body = () => {
  return (
    <div>
      <PropertyHeroSection />
      <PropertyDetails />
      <ImageGallery />
      <ContactAgentForm />
    </div>
  );
};

export default Body;
