import { useContext } from "react";
import Button from "../Button/button.component";
import "./Product-card.styles.scss";
import { CartContext } from "../../Contexts/cart.context";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const handleAddToCard = () => {
    console.log("product", product);
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <Button buttonType={"inverted"} type="button" onClick={handleAddToCard}>
        ADD TO CARD
      </Button>
    </div>
  );
};

export default ProductCard;
