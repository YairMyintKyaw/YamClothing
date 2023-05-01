import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownSvg } from "../../assets/crown.svg";
import { UserContext } from "../../Contexts/user.context";
import { signOutUser } from "../../Utils/Firebase/firebase.utils";
import CardIcon from "../../Components/Card-icon/card-icon.component";
import CartDropdown from "../../Components/Cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../Contexts/cart.context";
import {
  LogoContainer,
  NavLink,
  NavLinkContainer,
  NavigationContainer,
} from "./navigation.styles.jsx";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const handleSignOut = () => {
    signOutUser();
    setCurrentUser(null);
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <div>
            <CrownSvg />
          </div>
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to={"/shop"}>SHOP</NavLink>

          {!currentUser ? (
            <NavLink to={"/auth"}>SIGN IN</NavLink>
          ) : (
            <NavLink as={"span"} onClick={handleSignOut}>
              SIGN OUT
            </NavLink>
          )}
          <CardIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
