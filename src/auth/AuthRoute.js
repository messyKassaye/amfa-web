import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthHome from "./components/AuthHome";

export default function AuthRoute() {
  return (
    <Switch>
      <Route path={"/"} component={AuthHome} exact />
    </Switch>
  );
}
