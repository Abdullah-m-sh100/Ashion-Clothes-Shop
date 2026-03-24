import "./Footer.css";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

import logo from "../../assets/logo.png";
import pay_1 from "../../assets/payment/payment-1.png";
import pay_2 from "../../assets/payment/payment-2.png";
import pay_3 from "../../assets/payment/payment-3.png";
import pay_4 from "../../assets/payment/payment-4.png";
import pay_5 from "../../assets/payment/payment-5.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-1">
            <img src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt cilisis.
            </p>
            <div className="payment">
              <img src={pay_1} alt="" />
              <img src={pay_2} alt="" />
              <img src={pay_3} alt="" />
              <img src={pay_4} alt="" />
              <img src={pay_5} alt="" />
            </div>
          </div>
          <div className="col-2">
            <h2>Quick links</h2>
            <ul>
              <li>About</li>
              <li>Blogs</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="col-3">
            <h2>Account</h2>
            <ul>
              <li>My Account</li>
              <li>Orders Tracking</li>
              <li>Checkout</li>
              <li>Wishlist</li>
            </ul>
          </div>
          <div className="col-4">
            <h2>NEWSLETTER</h2>
            <div className="input-box">
              <input type="email" placeholder="Email" />
              <button type="submit">Subscribe</button>
            </div>
            <div className="social-links">
              <a href="">
                <FaFacebookF />
              </a>
              <a href="">
                <FaTwitter />
              </a>
              <a href="">
                <FaYoutube />
              </a>
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaPinterest />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p>
          &copy; 2025 All rights reserved | This website is made with by
          Abdullah abu shamluh
        </p>
      </div>
    </div>
  );
};

export default Footer;
