import { useContext } from "react";

import "./card-icon.styles.jsx";
import { CartContext } from "../../Contexts/cart.context";
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./card-icon.styles.jsx";

const CardIcon = () => {
  const { isCartOpen, setCartOpen } = useContext(CartContext);
  const { cartCount } = useContext(CartContext);
  return (
    <CartIconContainer
      className="cart-icon-container"
      onClick={() => setCartOpen(!isCartOpen)}
    >
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CardIcon;
