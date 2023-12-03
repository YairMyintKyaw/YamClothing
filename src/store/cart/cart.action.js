import { createAction } from "../../Utils/Reducer/reducer.util";
import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
  const existedProduct = cartItems.find((item) => item.id === productToAdd.id);
  if (existedProduct) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decreaseProductQuantity = (cartItems, productToDecreaseQuantity) => {
  if (productToDecreaseQuantity.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToDecreaseQuantity.id);
  } else {
    return cartItems.map((item) =>
      item.id === productToDecreaseQuantity.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
};

const deleteProduct = (cartItems, productToDelete) => {
  return cartItems.filter((item) => item.id !== productToDelete.id);
};

export const addItemToCart = (cartItems, productToAdd) =>
  createAction(
    CART_ACTION_TYPES.SET_CART_ITEMS,
    addCartItem(cartItems, productToAdd)
  );

export const decreaseQuantityInCart = (cartItems, productToDecreaseQuantity) =>
  createAction(
    CART_ACTION_TYPES.SET_CART_ITEMS,
    decreaseProductQuantity(cartItems, productToDecreaseQuantity)
  );

export const deleteProductFromCart = (cartItems, productToDelete) =>
  createAction(
    CART_ACTION_TYPES.SET_CART_ITEMS,
    deleteProduct(cartItems, productToDelete)
  );

export const setCartOpen = () =>
  createAction(CART_ACTION_TYPES.TOGGLE_CART_OPEN);
