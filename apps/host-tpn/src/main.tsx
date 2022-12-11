import React from "react";
import ReactDOM from "react-dom/client";
import App from "./hocs/App";
import "./index.css";
import { ContextProvider } from "store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider window={window}>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
