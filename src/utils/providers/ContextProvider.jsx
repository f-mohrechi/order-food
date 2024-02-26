"use client";

import AuthContext from "../../context/AuthContext";

export function ContextProvider({ children }) {
  return (
    <>
      {children}
      <AuthContext />
    </>
  );
}
