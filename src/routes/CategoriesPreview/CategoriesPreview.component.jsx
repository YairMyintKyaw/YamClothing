import CategoryPreview from "../../Components/categories-preview/CategoryPreview.component";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoryMap,
} from "../../store/categories/categories.selector";
import Spinner from "../../Components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoryMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const product = categoriesMap[title];
          return (
            <CategoryPreview title={title} products={product} key={title} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
