import React, { useEffect, useState } from "react";
import { createContext } from "react";
import Strings from "../helper/localization/localization";

export const Context = createContext({});

const AuthContext = ({ children }) => {
  const [state, setState] = useState({
    user: {},
    settings: {
      language: "en",
      direction: "ltr",
    },
    installPrompt: null,
  });
  const user = localStorage.getItem("user");
  const settings = localStorage.getItem("settings");

  useEffect(() => {
    let data = { ...state };
    if (user) data = { ...data, user: JSON.parse(user) };
    setState(data);

    // change language
    if (settings) data = { ...data, settings: JSON.parse(settings) };
    Strings.setLanguage(data.settings.language);
    // setState({ ...data });

    setState({ ...data });

    // PWA
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setState({ ...data, installPrompt: e });
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", (e) => {});
    };
  }, [user, settings]);

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
