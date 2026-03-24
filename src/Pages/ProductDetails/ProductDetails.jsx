import Navbar from "../../components/Navbar/Navbar";
import PageTracks from "../../components/Page_Tracks/Page_Tracks";
import ProductDetailsSection from "../../components/ProductDetails_section/ProductDetails_section";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { data } from "../../mock/data";
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {
  

  let { id } = useParams();
  let product = data[id - 1];


  return (
    <div className="ProductDetails">
        <Helmet>
              <title>Ashion - Product {id}</title>
            </Helmet>
      <Navbar />
      <PageTracks namePage="About" />
      <ProductDetailsSection product={product} />
      <Footer />
    </div>
  );
};

export default ProductDetails;
