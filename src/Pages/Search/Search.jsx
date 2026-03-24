import React from "react";
import SearchSection from "../../components/Search-section/Search-section";
import Navbar from "../../components/Navbar/Navbar";
import { Helmet } from "react-helmet-async";

const Search = () => {
  return (
    <div>
      <Helmet>
        <title>Ashion - Search</title>
      </Helmet>
      <Navbar />
      <SearchSection />
    </div>
  );
};

export default Search;
