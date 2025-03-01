import React from "react";
import PropertySearchBar from "./PropertySearchBar";
import PropertyList from "./PropertyList";
import MapView from "./MapView";
import PropertyDetailsModal from "./PropertyDetailsModal";
import FilterSidebar from "./FilterSidebar";
import PropertyComparison from "./PropertyComparison";
import Footer from "./Footer";

const Body = () => {
  return (
    <main className="flex flex-col w-full min-h-screen bg-gray-100">
      <PropertySearchBar />
      <div className="flex flex-row w-full">
        <FilterSidebar />
        <div className="flex flex-col flex-grow">
          <PropertyList />
          <MapView />
        </div>
      </div>
      <PropertyComparison />
      <PropertyDetailsModal />
      <Footer />
    </main>
  );
};

export default Body;
