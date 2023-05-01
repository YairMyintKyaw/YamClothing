import React from "react";
import ProductCard from "../Product-card/Product-card.component";
import { useNavigate } from "react-router-dom";
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./CategoryPreview.styles";

const CategoryPreview = ({ title, products }) => {
  const nav = useNavigate();
  const handleClick = (title) => {
    nav(`${title}`);
  };
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title onClick={handleClick.bind(null, title)}>
          {title.toUpperCase()}
        </Title>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
