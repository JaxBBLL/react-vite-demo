import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="mb-10 flex gap-20">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Nav;
