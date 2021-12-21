import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './reducers';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {rootSaga} from './saga';
const persistConfig = {
  key: 'root0',
  storage: AsyncStorage,
  whitelist: ['data'],
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};
const pReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, createLogger())),
);

export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export default store;
