import "./Instagram_section_card.css";
import { FaInstagram } from "react-icons/fa";

const   InstagramSectionCard = ({ image }) => {
  return (
    <div className="InstagramSectionCard">
      <img src={image} alt="" />
      <div className="InstagramSectionCard-text">
        <span>
          <FaInstagram />
        </span>
        <a href="">@ashion_shop</a>
      </div>
    </div>
  );
};

export default InstagramSectionCard;
