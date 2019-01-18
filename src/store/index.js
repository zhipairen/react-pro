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

const initState = { // 可选
  todos: [],
};

let store = createStore(persistedReducer, initState);
let persistor = persistStore(store);
export default store;
export {
  persistor,
};
