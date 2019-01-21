import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'; // 持久化
import storage from 'redux-persist/lib/storage';

import * as reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};
const reducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer, window.__INITIAL_STATE__);

export default store;
export const persistor = persistStore(store);
