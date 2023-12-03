import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./card-icon.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { newCartCount } from "../../store/cart/cart.selector.js";
import { setCartOpen } from "../../store/cart/cart.action.js";

const CardIcon = () => {
  const cartCount = useSelector(newCartCount);
  const dispatch = useDispatch();

  const handleCartOpen = () => dispatch(setCartOpen());
  return (
    <CartIconContainer className="cart-icon-container" onClick={handleCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CardIcon;
