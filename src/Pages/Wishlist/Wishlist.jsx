import PageTracks from "../../components/Page_Tracks/Page_Tracks";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";
import { Helmet } from "react-helmet-async";
import WishlistSection from "../../components/Wishlist-section/Wishlist-section";
import Footer from "../../components/Footer/Footer";

const Wishlist = () => {
  return (
    <div>
      <Helmet>
        <title>Ashion - Wishlist</title>
      </Helmet>
      <Navbar />
      <PageTracks namePage="Wishlist" />
      <WishlistSection />
      <Footer />
    </div>
  );
};

export default Wishlist;
