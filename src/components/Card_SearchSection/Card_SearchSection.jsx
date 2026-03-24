import { LiaStar, LiaStarSolid } from "react-icons/lia";
import "./Card_SearchSection.css";
import { useCartContext } from "../../Contexts/cartContext/useCartContext";

const CardSearchSection = ({ item }) => {
  let {
    cartItems,
    removeFromCart,
    addToCart,
  } = useCartContext();

  const isInCart = cartItems.some((product) => product.id === item.id);

  return (
    <div className="CardSearchSection">
      <div>
        <img src={item.image} alt="" />
        <div className="text">
          <h3 className="name">{item.title}</h3>
          <div className="stars">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>
                {i < item.stars ? <LiaStarSolid /> : <LiaStar />}
              </span>
            ))}
          </div>
          <p className="price">${item.new_price}</p>
        </div>
      </div>
      <div
        className="btn"
        onClick={(e) => {
          e.preventDefault();
          isInCart ? removeFromCart(item.id) : addToCart(item);
        }}
      >
        <button>
          {isInCart ? (
            <>
              Remove from Cart
            </>
          ) : (
            <>
              Add To Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default CardSearchSection;
