import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/index.tsx";
import { AppProvider } from "./context/index.tsx";
import "@/styles/base.less";
import "@unocss/reset/tailwind.css";
import "uno.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <AppProvider>
      <Layout />
    </AppProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
