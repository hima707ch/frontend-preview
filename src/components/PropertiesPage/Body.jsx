import React from "react";

import SearchBar from "./SearchBar";
import FilterPanel from "./FilterPanel";
import PropertyList from "./PropertyList";
import PaginationControl from "./PaginationControl";

const Body = () => {
  return (
    <div>
      <SearchBar />
      <FilterPanel />
      <PropertyList />
      <PaginationControl />
    </div>
  );
};

export default Body;
