import React, { useEffect, useState } from "react";
import { createContext } from "react";
import Strings from "../helper/localization/localization";
import store from "./../store/store";

export const Context = createContext({});

const AuthContext = ({ children }) => {
  const [state, setState] = useState({
    user: {},
    settings: {
      language: "en",
    },
    installPrompt: null,
  });
  const user = localStorage.getItem("user");

  useEffect(() => {
    let data = { ...state };
    if (user) data = { ...data, user: JSON.parse(user) };
    setState(data);

    // change language
    const settings = localStorage.getItem("settings");
    if (settings) {
      data = { ...data, settings: JSON.parse(settings) };
    }
    Strings.setLanguage(data.settings.language);
    setState(data);

    // PWA
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setState({ ...data, installPrompt: e });
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", (e) => {});
    };
  }, [user]);

  const isAuthenticated = () => {
    return !!state.user?.username;
  };

  const dispatch = (key, value, store = false) => {
    // setState({ ...state, [key]: value });
    let data = { ...state };
    data = { ...state, [key]: value };
    setState(data);
    if (store) {
      localStorage.setItem("settings", JSON.stringify(data.settings));
    }
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
