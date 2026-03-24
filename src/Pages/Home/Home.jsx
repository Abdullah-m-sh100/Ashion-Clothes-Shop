import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroHome from "../../components/Hero_home/Hero_home";
import NewProductHome from "../../components/New_product_home/New_product_home";
import Advertising from "../../components/Advertising/Advertising";
import BestProduct from "../../components/BestProduct/BestProduct";
import DiscountHome from "../../components/Discount_home/Discount_home";
import Services from "../../components/Services/Services";
import InstagramSection from "../../components/Instagram_section/Instagram_section";
import Footer from "../../components/Footer/Footer";

import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Ashion</title>
      </Helmet>
      <Navbar />
      <HeroHome />
      <NewProductHome />
      <Advertising />
      <BestProduct />
      <DiscountHome />
      <Services />
      <InstagramSection />
      <Footer />
    </div>
  );
};

export default Home;
