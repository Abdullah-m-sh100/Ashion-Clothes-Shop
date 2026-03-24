import { NavLink } from "react-router-dom";
import "./Advertising.css";

const Advertising = () => {
  return (
    <div className="Advertising">
      <div className="Advertising-texts">
        <p>The Chloe Collection</p>
        <h1>The Project Jacket</h1>
        <NavLink className="nav-link" to="/shop">
          <button className="main-button">Shop now</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Advertising;
