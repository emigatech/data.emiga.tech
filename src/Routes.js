import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Helmet} from "react-helmet";

import HomePage from './pages/HomePage';
import Error from './pages/Error';

class Routes extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>

            <Route path="*">
              <Error/>
            </Route>
          </Switch>
      </Router>
    );
  }
};
export default Routes;
