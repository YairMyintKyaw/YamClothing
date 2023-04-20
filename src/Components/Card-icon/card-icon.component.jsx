import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./card-icon.styles.scss";
import { DropdownContext } from "../../Contexts/dropdown.context";

const CardIcon = () => {
  const { isCartOpen, setCartOpen } = useContext(DropdownContext);

  return (
    <div
      className="cart-icon-container"
      onClick={() => setCartOpen(!isCartOpen)}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CardIcon;
