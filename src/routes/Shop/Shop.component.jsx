import { useContext } from "react";
import { ProductsContext } from "../../Contexts/product.context";
import ProductCard from "../../Components/Product-card/Product-card.component";
import "./Shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
