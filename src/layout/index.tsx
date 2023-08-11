import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = () => {
  return (
    <>
      <Nav />
      <div className="w-1200 mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
