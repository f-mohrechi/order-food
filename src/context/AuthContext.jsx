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
  console.log("first", state.user);

  const isAuthenticated = () => {
    return !!state.user;
  };

  return (
    <Context.Provider value={{ ...state, isAuthenticated }}>
      {children}
    </Context.Provider>
  );
};

export default AuthContext;
