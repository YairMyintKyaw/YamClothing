import { createAction } from "../../Utils/Reducer/reducer.util";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const setCategoriesMap = (Categories) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, Categories);

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (Categories) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Categories);

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);


