import React from "react";

import HeroSection from "./HeroSection";
import SearchBar from "./SearchBar";
import FeaturedProperties from "./FeaturedProperties";
import PropertyList from "./PropertyList";
import LatestNews from "./LatestNews";
import Testimonials from "./Testimonials";
import NewsletterSignup from "./NewsletterSignup";

const Body = () => {
  return (
    <div>
      <HeroSection />
      <SearchBar />
      <FeaturedProperties />
      <PropertyList />
      <LatestNews />
      <Testimonials />
      <NewsletterSignup />
    </div>
  );
};

export default Body;
