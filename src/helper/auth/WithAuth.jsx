import React, { useContext } from "react";
import { Context } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const WithAuth = (Component) => {
  const AuthWrapper = (props) => {
    const { isAuthenticated } = useContext(Context);
    return isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Navigate to="/login" replace={true} />
    );
  };

  return AuthWrapper;
};

export default WithAuth;
