import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NewProduct from "./containers/NewProduct";
import NotFound from "./containers/NotFound";

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute
      path="/products/add"
      exact
      component={NewProduct}
      props={childProps}
    />
    <Route component={NotFound} />
  </Switch>
);
