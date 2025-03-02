import React from "react";

import SearchBar from "./SearchBar";
import FeaturedPropertiesList from "./FeaturedPropertiesList";
import AuthenticationCTA from "./AuthenticationCTA";
import PersonalizedDashboardSnippet from "./PersonalizedDashboardSnippet";
import QuickLinksSection from "./QuickLinksSection";
import PropertyFilteringOptions from "./PropertyFilteringOptions";
import RegistrationModal from "./RegistrationModal";

const Body = () => {
  return (
    <div>
      <SearchBar />
      <FeaturedPropertiesList />
      <AuthenticationCTA />
      <PersonalizedDashboardSnippet />
      <QuickLinksSection />
      <PropertyFilteringOptions />
      <RegistrationModal />
    </div>
  );
};

export default Body;
