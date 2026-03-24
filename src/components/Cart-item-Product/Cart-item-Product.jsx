import { LiaStarSolid, LiaStar } from "react-icons/lia";
import "./cart-item-Product.css";
import { Link } from "react-router-dom";

const CartItemProduct = ({ item }) => {
  return (
    <div className="CartItemProduct">
      <div className="image">
        <img src={item.image} alt={item.name} style={{ width: "90px" }} />
      </div>
      <div className="texts">
        <Link to={`/productDetails/${item.id}`}>
          <p className="name">{item.title}</p>
          <p className="stars">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>
                {i < item.stars ? <LiaStarSolid /> : <LiaStar />}
              </span>
            ))}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CartItemProduct;
