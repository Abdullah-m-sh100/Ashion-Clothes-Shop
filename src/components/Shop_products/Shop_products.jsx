import "./Shop_products.css";
import ProductCard from "../product_card/product_card";


const ShopProducts = ({ currentProducts }) => {
if (!currentProducts || currentProducts.length === 0) {
    return (
      <div className="empty-dev">
        <h1>This category is Empty</h1>
      </div>
    );
  }

  return (
    <div className="ShopProducts">
      {currentProducts.map((prod, index) => (
        <ProductCard key={index} product={prod} />
      ))}
    </div>
  );
};

export default ShopProducts;
