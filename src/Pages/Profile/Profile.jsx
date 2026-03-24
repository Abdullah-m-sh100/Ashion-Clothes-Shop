import "./profile.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import PageTracks from "../../components/Page_Tracks/Page_Tracks";
import ProfileSection from "../../components/Profile-section/Profile-section";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const user = true
  if (!user) {
    return (
      <div className="user-not-found">
        <p>
          Please{" "}
          <NavLink to="/login" className="log">
            log in
          </NavLink>
        </p>
      </div>
    );
  }

  if (user) {
    return (
      <div>
        <Helmet>
          <title>Ashion - Profile</title>
        </Helmet>
        <Navbar />
        <PageTracks namePage="My Profile" />
        <ProfileSection />
        <Footer />
      </div>
    );
  }
};

export default Profile;
