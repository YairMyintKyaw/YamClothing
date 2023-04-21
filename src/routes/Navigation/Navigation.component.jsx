import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownSvg } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../Contexts/user.context";
import { signOutUser } from "../../Utils/Firebase/firebase.utils";
import CardIcon from "../../Components/Card-icon/card-icon.component";
import CartDropdown from "../../Components/Cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../Contexts/cart.context";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const handleSignOut = () => {
    signOutUser();
    setCurrentUser(null);
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <div>
            <CrownSvg />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>

          {!currentUser ? (
            <Link className="nav-link" to={"/auth"}>
              SIGN IN
            </Link>
          ) : (
            <span className="nav-link" onClick={handleSignOut}>
              SIGN OUT
            </span>
          )}
          <CardIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
