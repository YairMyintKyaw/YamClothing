import { takeLatest, call, all, put } from "redux-saga/effects";
import { getCollectionAndDocuments } from "../../Utils/Firebase/firebase.utils";
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "./categories.action";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";


export function* fetchCategoriesAsync() {
  try {
    const Categories = yield call(getCollectionAndDocuments);
    yield put(fetchCategoriesSuccess(Categories));
  } catch (e) {
    yield put(fetchCategoriesFailed(e));
  }
}

export function* onFetchCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
