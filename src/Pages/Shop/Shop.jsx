import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTracks from "../../components/Page_Tracks/Page_Tracks";
import ShopSection from "../../components/Shop_section/Shop_section";
import InstagramSection from "../../components/Instagram_section/Instagram_section";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";

const Shop = () => {
  return (
    <div className="Shop">
      <Helmet>
        <title>Ashion - Shop</title>
      </Helmet>
      <Navbar />
      <PageTracks namePage="Shop" />
      <ShopSection />
      <InstagramSection />
      <Footer />
    </div>
  );
};

export default Shop;
