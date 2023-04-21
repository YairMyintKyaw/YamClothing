import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./card-icon.styles.scss";
import { CartContext } from "../../Contexts/cart.context";

const CardIcon = () => {
  const { isCartOpen, setCartOpen } = useContext(CartContext);
  const { cartCount } = useContext(CartContext);
  return (
    <div
      className="cart-icon-container"
      onClick={() => setCartOpen(!isCartOpen)}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">
        {cartCount}
      </span>
    </div>
  );
};

export default CardIcon;
