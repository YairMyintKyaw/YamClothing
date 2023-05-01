import { useContext } from "react";
import { CategoriesContext } from "../../Contexts/categories.context";
import CategoryPreview from "../../Components/categories-preview/CategoryPreview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const product = categoriesMap[title];
        return <CategoryPreview title={title} products={product} key={title} />;
      })}
    </>
  );
};

export default CategoriesPreview;
