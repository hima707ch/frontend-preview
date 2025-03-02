import React from "react";

import HeroSection from "./HeroSection";
import SearchBar from "./SearchBar";
import FeaturedProperties from "./FeaturedProperties";
import LoginRegisterPrompt from "./LoginRegisterPrompt";
import ServiceInformationSection from "./ServiceInformationSection";
import DynamicPropertiesListing from "./DynamicPropertiesListing";
import UserTestimonials from "./UserTestimonials";

const Body = () => {
  return (
    <div>
      <HeroSection />
      <SearchBar />
      <FeaturedProperties />
      <LoginRegisterPrompt />
      <ServiceInformationSection />
      <DynamicPropertiesListing />
      <UserTestimonials />
    </div>
  );
};

export default Body;
