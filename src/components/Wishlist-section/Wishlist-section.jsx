import "./Wishlist-section.css";
import WishlistRowProduct from "../Wishlist-row-product/Wishlist-row-product";

import { LuClipboardList } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useWishlistContext } from "../../Contexts/wishlistContext/useWishlistContext";
import EmptyText from "../EmptyText";
import { Link } from "react-router-dom";

const WishlistSection = () => {
  let { wishlistItems, clearWishlist } = useWishlistContext();
  return (
    <div className="WishlistSection">
      <div className="container">
        <div className="table-dev">
          <table>
            <thead>
              <tr>
                <th className="product">Product</th>
                <th className="price">Price</th>
                <th className="add">Add to Cart</th>
                <th className="delete"></th>
              </tr>
            </thead>
            <tbody>
              {wishlistItems.map((item, index) => (
                <WishlistRowProduct key={index} item={item} />
              ))}
            </tbody>
          </table>
        </div>

        {wishlistItems.length > 0 ? (
          <>
            <div className="Btns">
              <Link to="/shop">
                <button className="btn-continue">
                  <span>
                    <LuClipboardList />
                  </span>{" "}
                  Continue Shopping
                </button>
              </Link>
              <button className="btn-clear" onClick={clearWishlist}>
                <span>
                  <RiDeleteBin6Line />
                </span>
                Clear Wishlist
              </button>
            </div>
          </>
        ) : (
          <>
            <EmptyText pageName="Wishlist" />
          </>
        )}
      </div>
    </div>
  );
};

export default WishlistSection;
