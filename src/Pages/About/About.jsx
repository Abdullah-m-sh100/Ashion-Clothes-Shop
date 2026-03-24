import Navbar from "../../components/Navbar/Navbar";
import PageTracks from "../../components/Page_Tracks/Page_Tracks";
import AboutSection from "../../components/About_section/About_section";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="About">
      <Helmet>
        <title>Ashion - About Us</title>
      </Helmet>
      <Navbar />
      <PageTracks namePage="About" />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;
