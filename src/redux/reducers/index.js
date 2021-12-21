import {combineReducers} from 'redux';
import data from './data';
const appReducer = combineReducers(
  Object.assign({
    data,
  }),
);

export default appReducer;
