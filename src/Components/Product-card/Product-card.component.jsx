import Button from "../Button/button.component";
import "./Product-card.styles.scss";

const ProductCard = ({ product: { imageUrl, name, price } }) => {
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <Button buttonType={"inverted"} type="button">
        ADD TO CARD
      </Button>
    </div>
  );
};

export default ProductCard;
