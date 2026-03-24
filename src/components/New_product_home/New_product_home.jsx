import "./New_product_home.css";
import ProductCard from "../product_card/product_card";
import { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../../mock/data";

const NewProductHome = () => {
  let [cardView, setCardView] = useState("all");

  let allProducts = data.filter((item) => {
    return item.isNewProduct;
  });

  return (
    <div className="NewProductHome">
      <div className="container">
        <div className="head-section">
          <h1>New product</h1>
          <ul>
            <li
              className={cardView == "all" ? "active" : ""}
              onClick={() => {
                setCardView("all");
              }}
            >
              All
            </li>
            <li
              className={cardView == "women" ? "active" : ""}
              onClick={() => {
                setCardView("women");
              }}
            >
              Women’s
            </li>
            <li
              className={cardView == "men" ? "active" : ""}
              onClick={() => {
                setCardView("men");
              }}
            >
              Men’s
            </li>
            <li
              className={cardView == "kids" ? "active" : ""}
              onClick={() => {
                setCardView("kids");
              }}
            >
              Kid’s
            </li>
          </ul>
        </div>
        <div className="all-cards">
          {allProducts.map((product, index) => {
            if (cardView == "all" || cardView === product.categories) {
              return <ProductCard key={index} product={product} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default NewProductHome;
