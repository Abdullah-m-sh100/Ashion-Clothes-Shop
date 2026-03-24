
import Navbar from "../../components/Navbar/Navbar";
import PageTracks from "../../components/Page_Tracks/Page_Tracks";
import ContactSection from "../../components/Contact_section/Contact_section";
import InstagramSection from "../../components/Instagram_section/Instagram_section";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="Contact">
      <Helmet>
        <title>Ashion - Contact</title>
      </Helmet>
      <Navbar />
      <PageTracks namePage="Contact" />
      <ContactSection />
      <InstagramSection />
      <Footer />
    </div>
  );
};

export default Contact;
