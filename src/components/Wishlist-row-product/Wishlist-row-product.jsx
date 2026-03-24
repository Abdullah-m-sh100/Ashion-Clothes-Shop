import "./Wishlist-row-product.css";
import WishlistItemProduct from "../wishlistItemProduct/wishlistItemProduct";

import { CgClose } from "react-icons/cg";
import { useWishlistContext } from "../../Contexts/wishlistContext/useWishlistContext";
import { useCartContext } from "../../Contexts/cartContext/useCartContext";
const WishlistRowProduct = ({ item }) => {
  let { removeFromWishlist } = useWishlistContext();

  let { cartItems, addToCart, removeFromCart } = useCartContext();

  const isInCart = cartItems.some((product) => product.id === item.id);

  const handelClickCartBtn = () => {
    isInCart ? removeFromCart(item.id) : addToCart(item);
  };

  return (
    <>
      <tr className="item-row">
        <td className="wishlist_product__item">
          <WishlistItemProduct item={item} />
        </td>
        <td className="wishlist_price">${item.new_price}</td>
        <td className="wishlist-add">
          <button onClick={handelClickCartBtn}>
            {isInCart ? "Removed from cart" : "Add to Cart"}
          </button>
        </td>
        <td className="wishlist_delete">
          <span
            onClick={() => {
              removeFromWishlist(item.id);
            }}
          >
            <CgClose />
          </span>
        </td>
      </tr>
    </>
  );
};

export default WishlistRowProduct;
