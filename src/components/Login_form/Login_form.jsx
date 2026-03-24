import { Link } from "react-router-dom";
import "./Login_form.css";
import { useState } from "react";

import { IoIosWarning } from "react-icons/io";
import { IoClose } from "react-icons/io5";
// import { useNavigate } from "react-router";
import Loading from "../Loading/Loading";
/*--------------------
   - Start component -
---------------------*/
const LoginForm = () => {
  const user = false;
  const loading = false;
  const error = false;
  // let navigate = useNavigate();
  /*--------------------
   - Start useStates -
  ---------------------*/
  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let [warning, setWarning] = useState("");

  /*--------------------
   - Start functions -
  ---------------------*/
  const handleLoginSubmit = (e) => {

    console.log(e);
    console.log("LoginSubmit");
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
  if (user || error) {
    return <ErrorPage />;
  }

  /*--------------------
   - if user not exist -
  ---------------------*/
  if (!user) {
    return (
      <div className="LoginForm">
        <div className="container-form">
          <h2>Login</h2>
          <form action="">
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button type="submit" onClick={(e) => handleLoginSubmit(e)}>
              Login
            </button>
            {warning && (
              <p className="warning">
                <div>
                  <IoIosWarning /> {warning}
                </div>
                <span onClick={() => setWarning("")}>
                  <IoClose />
                </span>
              </p>
            )}
          </form>
          <Link to="/forgotPassword">
            <span className="forgot">Forgot Password?</span>
          </Link>
          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    );
  }
};

export default LoginForm;
