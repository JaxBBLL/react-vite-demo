import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/index.tsx";
import { AppProvider } from "./context/index.tsx";
// import "@arco-design/web-react/es/style/theme/global.less";
import "@/styles/base.less";
import "@unocss/reset/tailwind.css";
import "uno.css";

// import "@arco-design/web-react/dist/css/arco.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <AppProvider>
      <Layout />
    </AppProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
