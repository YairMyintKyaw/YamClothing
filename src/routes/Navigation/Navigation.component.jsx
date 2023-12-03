import { Outlet } from "react-router-dom";
import { ReactComponent as CrownSvg } from "../../assets/crown.svg";
import { signOutUser } from "../../Utils/Firebase/firebase.utils";
import CardIcon from "../../Components/Card-icon/card-icon.component";
import CartDropdown from "../../Components/Cart-dropdown/cart-dropdown.component";
import {
  LogoContainer,
  NavLink,
  NavLinkContainer,
  NavigationContainer,
} from "./navigation.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, signOutStart } from "../../store/user/user.action";
import { selectCurrentUser } from "../../store/user/user.selector";
import { CartCondition } from "../../store/cart/cart.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const isCartOpen = useSelector(CartCondition);

  const handleSignOut = () => dispatch(signOutStart());

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
