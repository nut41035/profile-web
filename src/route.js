import React from "react";
import {
  //
  HashRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import NotFound from "./Components/error/NotFound";
import Profile from "./Components/Profile";
import Paper from "./Components/Paper";

const Index = () => (
  <div>
    <HashRouter>
      <Switch>
        <Route exact path="/404" name="NotFound" component={NotFound} />
        <Route exact path="/profile" name="profile" component={Profile} />
        <Route exact path="/paper" name="paper" component={Paper} />
        <Redirect from="/" to="/profile" />
      </Switch>
    </HashRouter>
  </div>
);

export default Index;
