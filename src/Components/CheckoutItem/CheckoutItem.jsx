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
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  decreaseQuantityInCart,
  deleteProductFromCart,
} from "../../store/cart/cart.action";
import { getAllItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ item }) => {
  const { imageUrl, price, quantity, name } = item;
  const cartItems = useSelector(getAllItems);
  const dispatch = useDispatch();
  const handleAddToCart = () => dispatch(addItemToCart(cartItems, item));
  const handleDecreaseFromCart = () =>
    dispatch(decreaseQuantityInCart(cartItems, item));
  const handleRemoveFromCart = () =>
    dispatch(deleteProductFromCart(cartItems, item));
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={handleDecreaseFromCart}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleAddToCart}>&#10095;</Arrow>
      </Quantity>
      <Price>{quantity * price}</Price>
      <RemoveButton onClick={handleRemoveFromCart}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
