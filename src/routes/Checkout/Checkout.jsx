import React, { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";
import "./Checkout.styles.scss";

const Checkout = () => {
  const { cartItems,totalPrice } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <span className="total">
        Total: ${totalPrice}
        
      </span>
    </div>
  );
};

export default Checkout;