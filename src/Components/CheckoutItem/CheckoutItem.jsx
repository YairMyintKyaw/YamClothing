import React, { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";
import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
  RemoveButton,
  Value,
} from "./CheckoutItem.styles";

const CheckoutItem = ({ item }) => {
  const { imageUrl, price, quantity, name } = item;

  const { addItemToCart, decreaseQuantityInCart, deleteProductFromCart } =
    useContext(CartContext);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={decreaseQuantityInCart.bind(null, item)}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemToCart.bind(null, item)}>&#10095;</Arrow>
      </Quantity>
      <Price>{quantity * price}</Price>
      <RemoveButton onClick={deleteProductFromCart.bind(null, item)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
