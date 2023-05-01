import { useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/button.component";
import "./Product-card.styles.jsx";
import { CartContext } from "../../Contexts/cart.context";
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from "./Product-card.styles.jsx";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const handleAddToCard = () => {
    console.log("product", product);
    addItemToCart(product);
  };
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
        onClick={handleAddToCard}
      >
        ADD TO CARD
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
