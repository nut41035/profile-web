import React from "react";
import {
  //
  // HashRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
// import { browserHistory } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import NotFound from "./Components/error/NotFound";
import Profile from "./Components/Profile";
import Paper from "./Components/Paper";
import Contact from "./Components/Contact";

const Index = () => (
  <div>
    <MuiThemeProvider>
      <Switch>
        <Route exact path="/404" name="NotFound" component={NotFound} />
        <Route exact path="/profile" name="profile" component={Profile} />
        <Route exact path="/paper" name="paper" component={Paper} />
        <Route exact path="/contact" name="contact" component={Contact} />
        <Redirect from="/" to="/profile" />
      </Switch>
    </MuiThemeProvider>
  </div>
);

export default Index;
