import "./Cart-section.css";
import CartRowProduct from "../Cart-row-Product/Cart-row-Product";
import { useCartContext } from "../../Contexts/cartContext/useCartContext";

const CartSection = () => {
  let { cartItems } = useCartContext();

  return (
    <div className="CartSection">
      <div className="container">
        <table>
          <thead className="heder-of-table">
            <tr>
              <th className="product">Product</th>
              <th className="price">Price</th>
              <th className="quantity">Quantity</th>
              <th className="total">Total</th>
              <th className="delete"></th>
            </tr>
          </thead>

          <tbody>
            {cartItems.map((item, index) => (
              <CartRowProduct key={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartSection;
