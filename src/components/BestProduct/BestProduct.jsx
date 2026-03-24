import "./BestProduct.css";
// import { best_seller, feature, hot_trend } from "../../assets/info";
import BestProductCard from "../Best_product_card/Best_product_card";
import { data } from "../../mock/data";
import { Link } from "react-router-dom";

const BestProduct = () => {
  let hot_trend = data.filter((item) => {
    return item.isHotTrend;
  });

  let best_seller = data.filter((item) => {
    return item.isBestSeller;
  });
  let feature = data.filter((item) => {
    return item.isFeature;
  });
  return (
    <div className="BestProduct">
      <div className="container">
        <div className="row">
          <div className="coll coll-1">
            <h1>Hot Trend</h1>
            <div className="all-cards">
              {hot_trend.map((product, index) => (
                <Link key={index} to={`/productDetails/${product.id}`}>
                  <BestProductCard product={product} />
                </Link>
              ))}
            </div>
          </div>
          <div className="coll coll-2">
            <h1>Best seller</h1>
            <div className="all-cards">
              {best_seller.map((product, index) => (
                <Link key={index} to={`/productDetails/${product.id}`}>
                  <BestProductCard key={index} product={product} />
                </Link>
              ))}
            </div>
          </div>
          <div className="coll coll-3">
            <h1>Feature</h1>
            <div className="all-cards">
              {feature.map((product, index) => (
                <Link key={index} to={`/productDetails/${product.id}`}>
                  <BestProductCard key={index} product={product} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProduct;
