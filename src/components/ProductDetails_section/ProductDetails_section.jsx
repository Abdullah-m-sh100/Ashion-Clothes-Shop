import "./ProductDetails_section.css";

import { useState } from "react";
import { useCartContext } from "../../Contexts/cartContext/useCartContext";
import { BsCartCheckFill } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";
import { useWishlistContext } from "../../Contexts/wishlistContext/useWishlistContext";
import { LuHeartOff } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";

const ProductDetailsSection = ({ product }) => {
  let {
    cartItems,
    removeFromCart,
    changeQuantity,
    addToCart,
  } = useCartContext();

  console.log(product.quantity);

  let [productQuantity, setProductQuantity] = useState(product.quantity);

  let { wishlistItems, addToWishlist, removeFromWishlist } =
    useWishlistContext();

  const handelClickWishlistBtn = () => {
    isInWishlist ? removeFromWishlist(product.id) : addToWishlist(product);
  };

  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const isInCart = cartItems.some((item) => item.id === product.id);

  // let [productSize, setProductSize] = useState("");

  return (
    <div
      className={`ProductDetailsSection ${isInWishlist ? "in-wishlist" : ""}`}
    >
      <div className="container">
        <div className="MainProductDetails">
          <div className="imagesProductDetails">
            {/* <div className="collImages">
              {product_details.images.map((im) => (
                <img src={im} alt="" />
              ))}
            </div> */}
            <div className="active-image">
              <img src={product.image} alt="" />
            </div>
          </div>
          <div className="MainProductInfo">
            <h1 className="name">{product.title}</h1>
            <p className="brand">
              <span>Brand: {product.brand}</span>
            </p>
            <div className="reviews">
              <div className="starts"></div>
              <p>({product.reviews} reviews)</p>
            </div>
            <div className="price">
              <p className="new-price">${product.new_price}</p>
              <p className="old-price">
                {product.old_price ? <>${product.old_price}</> : <></>}
              </p>
            </div>
            <p className="details">{product.details.description}</p>
            <div className="quantity">
              <div>
                <span>Quantity:</span>
                <div className="quantityOfNumber">
                  <span
                    onClick={() => {
                      changeQuantity(product.id, productQuantity - 1);
                      setProductQuantity(
                        productQuantity < 0
                          ? productQuantity - 1
                          : productQuantity,
                      );
                    }}
                  >
                    -
                  </span>
                  <input
                    type="number"
                    min={1}
                    value={productQuantity}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (!isNaN(val) && val > 0) {
                        changeQuantity(product.id, val);
                      }
                    }}
                  />
                  <span
                    onClick={() => {
                      changeQuantity(product.id, productQuantity + 1);
                      setProductQuantity(productQuantity + 1);
                    }}
                  >
                    +
                  </span>
                </div>
              </div>

              <div className="MainBtns">
                <button
                  className="add-to-cart"
                  onClick={(e) => {
                    e.preventDefault();
                    isInCart ? removeFromCart(product.id) : addToCart(product);
                  }}
                >
                  {isInCart ? (
                    <>
                      <BsCartCheckFill />
                      Product In Cart
                    </>
                  ) : (
                    <>
                      <TiShoppingCart />
                      Add To Cart
                    </>
                  )}
                </button>
                <button
                  className="add-to-wishlist"
                  onClick={handelClickWishlistBtn}
                >
                  {isInWishlist ? <LuHeartOff /> : <FiHeart />}
                </button>
              </div>
            </div>
            <hr />
            <div className="product-details">
              <div className="row">
                <p className="title">Availability: </p>
                <label htmlFor="stock" className="stock">
                  <input type="checkbox" id="stock" />
                  In Stock
                </label>
              </div>
              <div className="row">
                <p className="title">Available color: </p>
                {/* <div className="colors">
                  {product_details.colors.map((col, index) => (
                    <button
                      style={{ backgroundColor: col }}
                      key={index}
                    ></button>
                  ))}
                </div> */}
              </div>
              <div className="row">
                <p className="title">Available size: </p>
                {/* <div className="sizes">
                  {product_details.size.map((si, index) => (
                    <button
                      key={index}
                      className={productSize == si ? "active" : ""}
                      onClick={() => {
                        setProductSize(si);
                      }}
                    >
                      {si}
                    </button>
                  ))}
                </div> */}
              </div>
              <div className="row">
                <p className="title">Promotions: </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSection;
