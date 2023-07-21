import Router from "@/router/index";
import Nav from "./Nav";

const AppWrapper = () => {
  return (
    <div style={{ width: 1200, margin: "0 auto" }}>
      <Nav />
      <Router />
    </div>
  );
};

export default AppWrapper;
