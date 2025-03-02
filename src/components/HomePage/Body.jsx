import React from "react";

import HeroSection from "./HeroSection";
import SearchBar from "./SearchBar";
import FeaturedPropertiesList from "./FeaturedPropertiesList";
import PropertyCard from "./PropertyCard";
import IntroductionSection from "./IntroductionSection";
import NewsletterSignUp from "./NewsletterSignUp";
import TestimonialsSlider from "./TestimonialsSlider";

const Body = () => {
  return (
    <div>
      <HeroSection />
      <SearchBar />
      <FeaturedPropertiesList />
      <PropertyCard />
      <IntroductionSection />
      <NewsletterSignUp />
      <TestimonialsSlider />
    </div>
  );
};

export default Body;
