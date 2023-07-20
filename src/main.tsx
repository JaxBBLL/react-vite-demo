import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/index.tsx";
import { ProviderApp } from "./context/index.tsx";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProviderApp>
        <Layout />
      </ProviderApp>
    </BrowserRouter>
  </React.StrictMode>
);
