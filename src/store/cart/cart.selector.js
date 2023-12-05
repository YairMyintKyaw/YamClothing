import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const getAllItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const newCartCount = createSelector([getAllItems], (cartItems) =>
  cartItems.reduce((total, item) => item.quantity + total, 0)
);

export const newTotalPrice = createSelector([getAllItems], (cartItems) =>
  cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
);

export const CartCondition = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
