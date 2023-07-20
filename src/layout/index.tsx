import React from "react";
import Router from "@/router/index";
import Nav from "./Nav";

const AppWrapper = () => {
  return (
    <div>
      <Nav />
      <Router />
    </div>
  );
};

export default AppWrapper;
