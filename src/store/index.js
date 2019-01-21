import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'; // 持久化
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';

import reducers, { persisted } from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['navigation'],
};

const persistedReducer = persistReducer(persistConfig, persisted);
const allReducers = combineReducers({ ...persistedReducer, ...reducers });

const middlewares = applyMiddleware(thunkMiddleware);

let store = createStore(allReducers, window.__INITIAL_STATE__, middlewares);

export default store;
export const persistor = persistStore(store);
