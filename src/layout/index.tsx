import Router from "@/router/index";
import Nav from "./Nav";

const AppWrapper = () => {
  return (
    <div className="w-1200 mx-auto">
      <Nav />
      <Router />
    </div>
  );
};

export default AppWrapper;
