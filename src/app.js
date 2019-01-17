import React from 'rect';
import { BrowserRouter as Router, Route, Switch, StaticRouter } from 'react-router-dom';

const Test = ({ match }) => <div>{match}</div>;
const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/test" component={Test} />
      <Route path="/about"
        render={props => <div {...props} extra />}
      />
    </Switch>
  </Router>
);

export default AppRouter;
