import React from "react";
import PropertyImageCarousel from "./PropertyImageCarousel";
import VirtualTourVideo from "./VirtualTourVideo";
import PropertyDescription from "./PropertyDescription";
import FloorPlanViewer from "./FloorPlanViewer";
import PriceDetails from "./PriceDetails";
import MortgageCalculator from "./MortgageCalculator";
import PropertyHistory from "./PropertyHistory";
import EnergyEfficiencyRating from "./EnergyEfficiencyRating";
import NeighborhoodInformation from "./NeighborhoodInformation";
import SchoolsNearby from "./SchoolsNearby";
import TransportationOptions from "./TransportationOptions";
import LocationMap from "./LocationMap";
import AmenitiesList from "./AmenitiesList";
import UserReviews from "./UserReviews";
import ContactAgentForm from "./ContactAgentForm";

const PropertyDetailsPage = () => {
  return (
    <div className="property-details">
      <PropertyImageCarousel />
      <VirtualTourVideo />
      <PropertyDescription />
      <FloorPlanViewer />
      <PriceDetails />
      <MortgageCalculator />
      <PropertyHistory />
      <EnergyEfficiencyRating />
      <NeighborhoodInformation />
      <SchoolsNearby />
      <TransportationOptions />
      <LocationMap />
      <AmenitiesList />
      <UserReviews />
      <ContactAgentForm />
    </div>
  );
};

export default PropertyDetailsPage;
