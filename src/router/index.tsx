import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Layout from "@/layout";
import NotFound from "@/pages/NotFound";

interface RouteItem {
  path: string;
  element: ReactNode;
  children?: RouteItem[];
}

const routes: RouteItem[] = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
