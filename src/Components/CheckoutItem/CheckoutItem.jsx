import React, { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";
import "./CheckoutItem.styles.scss";

const CheckoutItem = ({ item }) => {
  const { imageUrl, price, quantity, name } = item;

  const { addItemToCart, decreaseQuantityInCart, deleteProductFromCart } =
    useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={decreaseQuantityInCart.bind(null, item)}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemToCart.bind(null, item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{quantity * price}</span>
      <div
        className="remove-button"
        onClick={deleteProductFromCart.bind(null, item)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
