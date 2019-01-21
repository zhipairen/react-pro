import React from 'rect';
import loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/login';

const Test = ({ match }) => <div>{match}</div>;
const Loading = () => <div>loading...</div>;

const LoadableComponent = loadable({ // code splitting
  loader: () => import('./Dashboard'),
  loading: Loading,
});
const LoadbleDashboard = () => <LoadableComponent />;

const AppRouter = () => (
  <Router basename = "/">
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/home" component={Test} />
      <Route path="/about"
        render={props => <div {...props} extra />}
      />
      <Route path="/lazy" component={LoadbleDashboard} />
    </Switch>
  </Router>
);

export default AppRouter;
