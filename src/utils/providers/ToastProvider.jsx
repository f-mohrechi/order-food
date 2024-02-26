"use client";

import { ToastContainer } from "react-toastify";

export function ToastProvider({ children }) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}
