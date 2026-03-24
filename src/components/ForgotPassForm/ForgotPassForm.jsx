import "./ForgotPassForm.css";
import { Link } from "react-router-dom";

const ForgotPassForm = () => {
  return (
    <div className="ForgotPassForm">
      <div className="container-form">
        <h2>Forgot Password</h2>
        <p>Enter your email address to receive a password reset link.</p>
        <form action="">
          <input type="email" placeholder="Email" />
          <button type="submit">Send Reset Link</button>
        </form>

        <p>
          Remembered your password ? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassForm;
