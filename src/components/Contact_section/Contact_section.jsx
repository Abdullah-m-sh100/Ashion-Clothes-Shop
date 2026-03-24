import "./Contact_section.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import Map from "../Map/Map";

const ContactSection = () => {
  return (
    <div className="ContactSection">
      <div className="container">
        <div className="row">
          <div className="col-1">
            <div className="contact-info">
              <h2>Contact info</h2>
              <div className="box">
                <h3>
                  <IoLocationSharp /> Address
                </h3>
                <p>
                  160 Pennsylvania Ave NW, Washington, Castle, PA 16101-5161
                </p>
              </div>
              <div className="box">
                <h3>
                  <FaPhoneAlt />
                  Phone
                </h3>
                <p>
                  <span>125-711-811</span>|<span>125-668-886</span>
                </p>
              </div>
              <div className="box">
                <h3>
                  <FaHeadset />
                  Support
                </h3>
                <p>Support.photography@gmail.com</p>
              </div>
            </div>
            <div className="send-massage">
              <h2>SEND MESSAGE</h2>
              <form action="">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Website" />
                <textarea
                  name=""
                  id=""
                  placeholder="Massage"
                  rows="5"
                ></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
          <div className="col-2">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
