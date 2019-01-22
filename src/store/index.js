import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'; // 持久化
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';

import reducers, { persisted } from './reducers';

const persistedReducer = Object.create(null);
const rootRersistConfig = {
  key: 'root',
  storage,
  blacklist: ['navigation'],
};

Object.keys(persisted).forEach(k => {
  persistedReducer[k] = persistReducer({
    key: k,
    storage,
    blacklist: ['isLoggingIn'],
  }, persisted[k]);
});

const allReducers = combineReducers({ ...reducers, ...persistedReducer });
const rootReducers = persistReducer(rootRersistConfig, allReducers);

const middlewares = applyMiddleware(thunkMiddleware);

let store = createStore(rootReducers, window.__INITIAL_STATE__, middlewares);

export default store;
export const persistor = persistStore(store);
