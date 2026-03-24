import Footer from "../../components/Footer/Footer";
import ForgotPassForm from "../../components/ForgotPassForm/ForgotPassForm";
import Navbar from "../../components/Navbar/Navbar";
import PageTracks from "../../components/Page_Tracks/Page_Tracks";
const ForgotPassword = () => {
  return (
    <div className="ForgotPassword">
      <Navbar />
      <PageTracks namePage="Forgot Password" />
      <ForgotPassForm />
      <Footer />
    </div>
  );
};

export default ForgotPassword;
