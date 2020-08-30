import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

import Cart from "./views/Cart";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import indexRoutes from "./routes";

const AppRouter = ({ authenticated, ...props }) => {
  // Test every passed-in auth verification function.
  const verifyAuth = (authCriteria, props) => {
    if (authCriteria.length === 0) return true;
    return authCriteria.every((criterion) => criterion(props));
  };

  // Authentication HoC
  const withAuth = ({ authCriteria = [], redirectPath = "/" } = {}) => (
    Component
  ) => (props) => {
    const isAuthorized = verifyAuth(authCriteria, props);
    console.log(redirectPath);
    return isAuthorized ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: redirectPath,
          state: { from: props.location },
        }}
      />
    );
  };

  const validUser = (_props) => {
    if (!authenticated) {
      return false;
    }
    return true;
  };

  const unauthUser = (_props) => {
    if (authenticated) {
      return false;
    }
    return true;
  };

  // The Store route has different authentication requirements
  // than the other two routes
  const loginCriteria = [unauthUser];
  const mainCriteria = [validUser];

  const authRoute = withAuth({
    authCriteria: mainCriteria,
    redirectPath: "/login",
  });

  const ProtectedRoutes = {
    Login: withAuth({ authCriteria: loginCriteria })(Login),
    Cart: authRoute(Cart),
  };

  return (
    <Router>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route {...prop} key={key} />;
        })}
        <Route exact path="/login" component={ProtectedRoutes.Login} />
        <Route exact path="/cart" component={ProtectedRoutes.Cart} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.member.authenticated,
});

export default connect(mapStateToProps, null)(AppRouter);
