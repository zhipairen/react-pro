import React from 'react';
import loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/login';
import Home from './pages/home/index';

const Test = ({ match }) => <div>{match}</div>;
const Loading = () => <div>loading...</div>;

const LoadableComponent = loadable({ // code splitting
  loader: () => import('./pages/home/index'),
  loading: Loading,
});
const LoadbleDashboard = () => <LoadableComponent />;

const AppRouter = () => (
  <Router basename = "/">
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/about"
        render={props => <div {...props} extra />}
      />
      <Route path="/lazy" component={LoadbleDashboard} />
      <Route path="/test" component={Test} />
    </Switch>
  </Router>
);

export default AppRouter;
