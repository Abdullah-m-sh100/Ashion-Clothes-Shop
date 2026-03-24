import { Link } from "react-router-dom";
import "./Register-form.css";

import { useState } from "react";
// import { useNavigate } from "react-router";
import { IoIosWarning } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import ErrorPage from "../../Pages/errorPage/errorPage";
import Loading from "../Loading/Loading";
/*--------------------
   - Start component -
---------------------*/
const RegisterForm = () => {
 const user = false;
  const loading = false;
  const error = false;

  /*--------------------
   - Start useStates -
  ---------------------*/
  // let navigate = useNavigate();
  let [formData, setFormData] = useState({
    fullName: "",

    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  let [warning, setWarning] = useState("");

  /*--------------------
   - Start functions -
  ---------------------*/
  console.log(user);
  const handleRegisterSubmit = (e) => {
    console.log("Register");
    
    console.log(e)
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
      <div className="RegisterForm">
        <div className="container-form">
          <h2>Register</h2>
          <form action="">
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
              }}
              value={formData.fullName}
              required
            />

            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              value={formData.email}
              required
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
              value={formData.password}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => {
                setFormData({ ...formData, confirmPassword: e.target.value });
              }}
              value={formData.confirmPassword}
              required
            />
            <label className="agree" htmlFor="agree">
              <input
                type="checkbox"
                name="agree"
                id="agree"
                onChange={(e) => {
                  setFormData({ ...formData, agree: e.target.checked });
                }}
                checked={formData.agree}
              />
              I agree to the Terms & Conditions
            </label>

            <button type="submit" onClick={(e) => handleRegisterSubmit(e)}>
              Register
            </button>
          </form>
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

          <p>
            Already have an account? <Link to="/login"> Login here</Link>
          </p>
        </div>
      </div>
    );
  }
};

export default RegisterForm;
