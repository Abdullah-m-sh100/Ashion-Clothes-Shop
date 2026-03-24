import { Link } from "react-router-dom";
import "./Cart-finally.css";
import { useCartContext } from "../../Contexts/cartContext/useCartContext";

const CartFinally = () => {
  let { cartItems, clearCart } = useCartContext();
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.new_price * item.quantity,
    0,
  );

  return (
    <div className="CartFinally">
      <div className="container">
        <div className="mainBtn">
          <Link to="/shop">
            <button>Continue Shopping</button>
          </Link>
          <button
            onClick={() => {
              clearCart();
            }}
          >
            Clear cart
          </button>
        </div>
        <div className="discount">
          <div className="form">
            <h3>Discount codes</h3>
            <form action="">
              <input type="text" placeholder="Enter your coupon code" />
              <button>Apply</button>
            </form>
          </div>
          <div className="box">
            <div>
              <h3>Cart total</h3>
              <div className="row">
                <p>Subtotal</p>
                <p className="price">$ {subtotal.toFixed(1)}</p>
              </div>
              <div className="row">
                <p>Total</p>
                <p className="price">$ {subtotal.toFixed(1)}</p>
              </div>
            </div>
            <button>Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartFinally;
