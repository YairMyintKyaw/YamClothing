import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existedProduct = cartItems.find((item) => item.id === productToAdd.id);
  // console.log(existedProduct);
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

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, item) => item.quantity + total,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);
  useEffect(() => {
    const newTOtalPrice = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setTotalPrice(newTOtalPrice);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const decreaseQuantityInCart = (productToDecreaseQuantity) => {
    setCartItems(decreaseProductQuantity(cartItems, productToDecreaseQuantity));
  };

  const deleteProductFromCart = (productToDelete) => {
    setCartItems(deleteProduct(cartItems, productToDelete));
  };

  const value = {
    isCartOpen,
    setCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    decreaseQuantityInCart,
    deleteProductFromCart,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
