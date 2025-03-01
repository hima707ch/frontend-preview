import React from "react";
import SearchBar from "./SearchBar";
import FilterMenu from "./FilterMenu";
import SortDropdown from "./SortDropdown";
import FeaturedProperties from "./FeaturedProperties";
import PropertyCard from "./PropertyCard";
import PropertyDetailModal from "./PropertyDetailModal";
import PropertyMap from "./PropertyMap";
import MortgageCalculator from "./MortgageCalculator";
import RecentViews from "./RecentViews";
import ListingPagination from "./ListingPagination";
import ContactAgentForm from "./ContactAgentForm";
import NewsletterSignUp from "./NewsletterSignUp";

const PropertyListingPage = () => {
  return (
    <div className="property-listing">
      <SearchBar />
      <FilterMenu />
      <SortDropdown />
      <FeaturedProperties />
      <PropertyCard />
      <PropertyDetailModal />
      <PropertyMap />
      <MortgageCalculator />
      <RecentViews />
      <ListingPagination />
      <ContactAgentForm />
      <NewsletterSignUp />
    </div>
  );
};

export default PropertyListingPage;
