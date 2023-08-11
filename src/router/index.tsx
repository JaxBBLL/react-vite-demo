import React, { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import Layout from "@/layout";
import NotFound from "@/pages/NotFound";

const modules = import.meta.glob("../pages/**/*.tsx");

const loadView = (view: string) => {
  let PageView;
  for (const path in modules) {
    const dir = `../pages${view}.tsx`;
    if (dir === path) {
      PageView = lazy(modules[path] as any);
    }
  }
  return PageView ? (
    <React.Suspense fallback={<div>loading</div>}>
      <PageView />
    </React.Suspense>
  ) : (
    <NotFound />
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      {
        path: "about",
        element: loadView("/About"),
      },
      {
        path: "test",
        element: loadView("/test/index"),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
