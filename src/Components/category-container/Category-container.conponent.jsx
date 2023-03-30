import CategoryItem from "../Category-item/Category-item.component";
import "./categories-container.styles.scss";
const CategoryContainer = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryItem key={id} category={{ title, imageUrl }} />
      ))}
    </div>
  );
};

export default CategoryContainer;
