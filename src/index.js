import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./utils/providers/ContextProvider";
import { ToastProvider } from "./utils/providers/ToastProvider";
import ClientProvider from "./utils/providers/ClientProvider";
import * as serviceWorkers from "./serviceWorkerRegistration";
import "../src/helper/localization/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ClientProvider>
      <ContextProvider>
        <BrowserRouter>
          <ToastProvider>
            <App />
          </ToastProvider>
        </BrowserRouter>
      </ContextProvider>
    </ClientProvider>
  </React.StrictMode>
);

serviceWorkers.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
