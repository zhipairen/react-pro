import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppRouter from './router';
import store, { persistor } from './store';

import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <LocaleProvider locale={zhCN}>
          <AppRouter />
        </LocaleProvider>
      </PersistGate>
    </Provider>
  );
};
// document.getElementById('root') // 有bug
ReactDOM.render(
  <App />,
  document.body
);
