import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// will remove later
// import { useUserContext } from "../context/user_context";
// import { Loading, Error } from "../components/index.js";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, isError } =
    useAuth0();

  const isUser = isAuthenticated && user;

  // if (isLoading) return <Loading />;

  // if (isError) return <Error />;

  return (
    <Route
      {...rest}
      render={() => (isUser ? children : <Redirect to="/"></Redirect>)}
    />
  );
};
export default PrivateRoute;
