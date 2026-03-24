import "./Profile-section.css";
import ErrorPage from "../../Pages/errorPage/errorPage";
import Loading from "../Loading/Loading";

import { FaUser } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { IoMdLock } from "react-icons/io";
import PersonalInformation from "../personal-information/personal-information";
import { useState } from "react";
import ChangePassword from "../Phange-password/Phange-password";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ProfileSection = () => {
  let navigate = useNavigate();
  const user = false;
  const loading = false;
  const error = false;
  let [profileContent, setProfileContent] = useState("personal-information");

  /*--------------------
   - Start functions -
  ---------------------*/
  const logOutBtn = () => {
    console.log("Sign out");
  };

  /*--------------------
   - in loading -
  ---------------------*/
  if (loading) {
    return <Loading />;
  }

  /*--------------------
   - if user exist -
  ---------------------*/
  if (user) {
    return (
      <div className="profile-section">
        <div className="container">
          <div className="profile-categories">
            <h3> Categories</h3>
            <ul>
              <li
                onClick={() => {
                  setProfileContent("personal-information");
                }}
              >
                <FaUser />
                Your Information
              </li>
              <li>
                <IoIosCart />
                Orders
              </li>
              <li
                onClick={() => {
                  setProfileContent("change-password");
                }}
              >
                <IoMdLock />
                Change Password
              </li>
              <li
                onClick={() => {
                  logOutBtn();
                }}
              >
                <IoLogOut style={{ transform: "rotate(180deg)" }} />
                Log out
              </li>
            </ul>
          </div>
          <div className="profile-contents">
            {profileContent == "personal-information" ? (
              <PersonalInformation />
            ) : profileContent == "change-password" ? (
              <ChangePassword />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }

  /*--------------------
  - if user not exist -
  ---------------------*/
  if (!user || error) {
    return <ErrorPage />;
  }
};

export default ProfileSection;
