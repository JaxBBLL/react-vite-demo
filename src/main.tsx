import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { StoreProvider } from "./store/index.tsx";
import "@/styles/base.less";
import "@unocss/reset/tailwind.css";
import "uno.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <StoreProvider>
    <App />
  </StoreProvider>
  // </React.StrictMode>
);
