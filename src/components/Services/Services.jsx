import "./Services.css";

import { FaCar } from "react-icons/fa6";
import { ImLifebuoy } from "react-icons/im";
import { FaHeadphones } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const Services = () => {
  return (
    <div className="Services">
      <div className="container">
        <div className="row">
          <div className="box">
            <div className="icon">
              <FaCar />
            </div>
            <div className="texts">
              <h1>Free Shipping</h1>
              <p>For all oder over $99</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FaRegMoneyBillAlt />
            </div>
            <div className="texts">
              <h1>Money Back Guarantee</h1>
              <p>If good have Problems</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <ImLifebuoy />
            </div>
            <div className="texts">
              <h1>Online Support 24/7</h1>
              <p>Dedicated support</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FaHeadphones />
            </div>
            <div className="texts">
              <h1>Payment Secure</h1>
              <p>100% secure payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
