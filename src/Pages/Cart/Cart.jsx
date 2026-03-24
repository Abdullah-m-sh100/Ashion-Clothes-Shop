import Navbar from "../../components/Navbar/Navbar";
import PageTracks from "../../components/Page_Tracks/Page_Tracks";
import CartSection from "../../components/Cart-section/Cart-section";
import Footer from "../../components/Footer/Footer";
import CartFinally from "../../components/Cart-finally/Cart-finally";
import InstagramSection from "../../components/Instagram_section/Instagram_section";
import { Helmet } from "react-helmet-async";
import { useCartContext } from "../../Contexts/cartContext/useCartContext";
import EmptyText from "../../components/EmptyText";

const Cart = () => {
  let { cartItems } = useCartContext();
  return (
    <div className="Cart">
      <Helmet>
        <title>Ashion - Cart</title>
      </Helmet>
      <Navbar />
      <PageTracks namePage="Shopping cart" />

      <CartSection />
      {cartItems <= 0 ? (
        <EmptyText pageName="Cart" />
      ) : (
        <>
          <CartFinally />
          <InstagramSection />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
