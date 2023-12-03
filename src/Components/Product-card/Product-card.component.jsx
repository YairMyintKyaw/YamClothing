import Button, { BUTTON_TYPE_CLASSES } from "../Button/button.component";
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from "./Product-card.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;

  const dispatch = useDispatch();

  const cartItems = useSelector(getAllItems);
  const handleAddToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        type="button"
        onClick={handleAddToCart}
      >
        ADD TO CARD
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
