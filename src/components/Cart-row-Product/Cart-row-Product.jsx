import { useCartContext } from "../../Contexts/cartContext/useCartContext";
import CartItemProduct from "../cart-item-Product/Cart-item-Product";
import "./Cart-row-Product.css";
import { CgClose } from "react-icons/cg";

const CartRowProduct = ({ item }) => {
  let { removeFromCart, incrementQuantity, decrementQuantity } =
    useCartContext();

  return (
    <>
      <tr className="item-row">
        <td className="cart_product__item">
          <CartItemProduct item={item} />
        </td>
        <td className="cart_price">$ {item.new_price}</td>
        <td className="cart_quantity">
          <div>
            <span
              onClick={() => {
                decrementQuantity(item.id);
              }}
            >
              -
            </span>
            <span>{item.quantity}</span>
            <span
              onClick={() => {
                incrementQuantity(item.id);
              }}
            >
              +
            </span>
          </div>
        </td>
        <td className="cart_total">$ {item.new_price * item.quantity}</td>
        <td className="cart_delete">
          <span onClick={() => removeFromCart(item.id)}>
            <CgClose />
          </span>
        </td>
      </tr>

    </>
  );
};

export default CartRowProduct;
