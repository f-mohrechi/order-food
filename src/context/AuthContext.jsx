import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const Context = createContext({});

const AuthContext = ({ children }) => {
  const [state, setState] = useState({
    user: {},
  });
  const user = localStorage.getItem("user");

  useEffect(() => {
    let data = { ...state };
    if (user) {
      data = { ...data, user: JSON.parse(user) };
    }
    setState(data);
  }, [user]);

  const isAuthenticated = () => {
    return !!state.user?.username;
  };

  const dispatch = (key, value) => {
    setState({ ...state, [key]: value });
  };

  return (
    <Context.Provider
      value={{ ...state, isAuthenticated: isAuthenticated(), dispatch }}
    >
      {children}
    </Context.Provider>
  );
};

export default AuthContext;
