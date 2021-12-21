import {takeLatest, put} from 'redux-saga/effects';
import * as types from '../../types';
import firestore from '@react-native-firebase/firestore';

export function* getRecipesRequest() {
  yield takeLatest(types.GET_RECIPES, getRecipes);
}
function* getRecipes(params) {
  try {
    let recipes = {};
    let categories = {};

    yield firestore()
      .collection('homeAssignment')
      .doc('recipes')
      .get()
      .then(querySnapshot => {
        recipes = querySnapshot?._data;
      })
      .catch(error => {});

    yield firestore()
      .collection('homeAssignment')
      .doc('categories')
      .get()
      .then(querySnap => {
        console.log('categories', querySnap);
        categories = querySnap?._data;
        Object.keys(recipes).map((item, index) => {
          recipes[item] = {
            ...recipes[item],
            categoryName: querySnap?._data[recipes[item].categoryId]?.name,
          };
          if (categories[recipes[item].categoryId]?.recipes) {
            categories[recipes[item].categoryId].recipes.push(item);
          } else {
            categories[recipes[item].categoryId].recipes = [item];
          }
        });
      })
      .catch(error => {});

    yield put({
      type: types.GET_RECIPES_SUCCESS,
      data: {
        recipes: recipes,
        categories: categories,
      },
    });
  } catch (error) {}
}
