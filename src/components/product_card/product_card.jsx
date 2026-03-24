import "./product_card.css";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import { FiMaximize2 } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Contexts/cartContext/useCartContext";
import { useWishlistContext } from "../../Contexts/wishlistContext/useWishlistContext";

const ProductCard = ({ product }) => {
  let { cartItems, addToCart, removeFromCart } = useCartContext();

  let { wishlistItems, addToWishlist, removeFromWishlist } =
    useWishlistContext();

  const isInCart = cartItems.some((item) => item.id === product.id);
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const handelClickCartBtn = () => {
    isInCart ? removeFromCart(product.id) : addToCart(product);
  };
  const handelClickWishlistBtn = () => {
    isInWishlist ? removeFromWishlist(product.id) : addToWishlist(product);
  };

  return (
    <div
      className={`ProductCard ${isInCart ? "in-cart" : ""} ${isInWishlist ? "in-wishlist" : ""}`}
    >
      <div className="image">
        <img src={product.image} alt="" />
        <div className="btn">
          <Link to={`/productDetails/${product.id}`}>
            <span>
              <FiMaximize2 />
            </span>
          </Link>
          <span className="wishlist-btn" onClick={handelClickWishlistBtn}>
            <FaRegHeart />
          </span>
          <span className="cart-btn" onClick={handelClickCartBtn}>
            <LiaShoppingBagSolid />
          </span>
        </div>
      </div>
      <Link to={`/productDetails/${product.id}`}>
        <div className="card-info">
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
          {product.old_price != null ? (
            <div className="price">
              <p className="new-price active">${product.new_price}</p>
              <p className="old-price">$ {product.old_price}</p>
            </div>
          ) : (
            <div className="price">
              <p className="new-price">$ {product.new_price}</p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
