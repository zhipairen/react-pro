import React from 'react';
import loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Login from './pages/login';
import Home from './pages/home';

import Header from './components/header';

const Test = ({ match }) => <div> <h3>Only asc/desc are allowed: {match.params.direction}</h3></div>;
const Loading = () => <div>loading...</div>;

const LoadableComponent = loadable({ // code splitting
  loader: () => import('./pages/home'),
  loading: Loading,
});
const LoadbleDashboard = () => <LoadableComponent />;

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route extra path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/about"
          render={props => <div {...props} extra>about</div>}
        />
        <Route path="/lazy" component={LoadbleDashboard} />
        <Route path="/test" component={Test} />
        <Redirect to="/home" component={Home} />
      </Switch>
    </div>

  </Router>
);

export default AppRouter;
