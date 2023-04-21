import { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";
import Button from "../Button/button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const nav = useNavigate();
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems &&
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
      </div>
      <Button
        onClick={() => {
          nav("/checkout");
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
