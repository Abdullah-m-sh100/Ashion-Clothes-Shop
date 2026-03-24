import { FaStar } from "react-icons/fa";
import "./Best_product_card.css";
const BestProductCard = ({ product }) => {
  return (
    <div className="BestProductCard">
      <img src={product.image} alt="" />
      <div className="test-info">
        <p className="name">{product.title}</p>
        <div className="stars">
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
        </div>
        <p className="price">{product.price}</p>
      </div>
    </div>
  );
};

export default BestProductCard;
