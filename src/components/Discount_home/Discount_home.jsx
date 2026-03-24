import "./Discount_home.css";

import discount from "../../assets/discount.jpg";
import { NavLink } from "react-router-dom";

const DiscountHome = () => {
  return (
    <div className="DiscountHome">
      <div className="container">
        <div className="row">
          <div className="coll-1">
            <img src={discount} alt="" />
          </div>
          <div className="coll-2">
            <div className="discount-texts">
              <div className="group-1">
                <p>Discount</p>
                <h1>Summer 2025</h1>
                <p>
                  Sale <span> 50%</span>
                </p>
              </div>
            </div>
            <div className="group-2">
              <div className="timer">
                <div className="day">
                  30
                  <span>Day</span>
                </div>
                <div className="hour">
                  24
                  <span>Hour</span>
                </div>
                <div className="min">
                  60
                  <span>Min</span>
                </div>
                <div className="sec">
                  59
                  <span>Sec</span>
                </div>
              </div>
              <NavLink className="nav-link" to="/shop">
                <button className="main-button">Shop now</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountHome;
