import {fork} from 'redux-saga/effects';
import {getRecipesRequest} from './recipes-saga/getRecipes';

export function* rootSaga() {
  yield fork(getRecipesRequest);
}
