import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import { Helmet } from "react-helmet-async";

import PageTracks from "../../components/Page_Tracks/Page_Tracks";
import LoginForm from "../../components/Login_form/Login_form";

const Login = () => {
  return (
    <div className="Login">
      <Helmet>
        <title>Ashion - Login</title>
      </Helmet>
      <Navbar />
      <PageTracks namePage="Login" />
      <LoginForm />
    </div>
  );
};

export default Login;
