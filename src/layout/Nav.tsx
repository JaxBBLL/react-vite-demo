import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-gray-200 mb-10 py-10">
      <nav className="w-full mx-auto flex gap-20">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  );
};

export default Nav;
