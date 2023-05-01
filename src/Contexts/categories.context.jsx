import { createContext, memo, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data.js";
import {
  addCollectionAndDocument,
  getCollectionAndDocuments,
} from "../Utils/Firebase/firebase.utils.js";

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  const value = { categoriesMap, setCategoriesMap };

  useEffect(() => {
    const getCategoryMap = async () => {
      const CategoryMap = await getCollectionAndDocuments();
      setCategoriesMap(CategoryMap);
    };
    getCategoryMap();
  }, []);
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
