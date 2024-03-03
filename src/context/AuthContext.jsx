import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const Context = createContext({});

const AuthContext = ({ children }) => {
  const [state, setState] = useState({
    user: {},
    installPrompt: null,
  });
  const user = localStorage.getItem("user");

  useEffect(() => {
    let data = { ...state };
    if (user) {
      data = { ...data, user: JSON.parse(user) };
    }
    setState(data);
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setState({ ...state, installPrompt: e });
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", (e) => {});
    };
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
