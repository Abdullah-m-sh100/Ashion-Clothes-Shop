import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTracks from "../../components/Page_Tracks/Page_Tracks";
import RegisterForm from "../../components/Register-form/Register-form";

import { Helmet } from "react-helmet-async";

const Register = () => {
  return (
    <div className="Register">
      <Helmet>
        <title>Ashion - Register</title>
      </Helmet>
      <Navbar />
      <PageTracks namePage="Register" />
      <RegisterForm />
    </div>
  );
};

export default Register;
