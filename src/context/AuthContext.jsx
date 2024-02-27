import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const Context = createContext({});

const AuthContext = ({ children }) => {
  const [state, setState] = useState({
    user: {},
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    let data = { ...state };
    if (user) {
      data = { ...data, user: JSON.parse(user) };
    }
    setState(data);
  }, []);

  const isAuthenticated = () => {
    return !!state.user?.username;
  };

  const dispatch = (key, value) => {
    setState({ ...state, [key]: value });
  };

  console.log("auth", isAuthenticated());

  return (
    <Context.Provider
      value={{ ...state, isAuthenticated: isAuthenticated(), dispatch }}
    >
      {children}
    </Context.Provider>
  );
};

export default AuthContext;
