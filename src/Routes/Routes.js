import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AuthDashboard from "../auth/AuthDashboard";
import Home from "../home/Home";
import AuthenticatedRoute from "./AuthenticationRoute";
import PrivateRoute from "./PrivateRoute";
export default function Routes() {
  return (
    <Router>
      <Switch>
        <AuthenticatedRoute path={"/auth"} component={AuthDashboard} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </Router>
  );
}
