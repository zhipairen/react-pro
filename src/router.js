import React from 'react';
import loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';

import Login from './pages/login';
import Home from './pages/home';

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
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/test">test</Link>
        </li>
      </ul>
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
