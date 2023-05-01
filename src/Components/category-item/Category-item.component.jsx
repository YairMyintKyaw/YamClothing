import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  CategoryBodyContainer,
  CategoryContainer,
} from "./category-item.styles.jsx";

const CategoryItem = ({ category: { imageUrl, title, route } }) => {
  const nav = useNavigate();

  const handleNavigate = () => {
    nav(route);
  };
  return (
    <CategoryContainer onClick={handleNavigate}>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <div>Shop now</div>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default CategoryItem;
