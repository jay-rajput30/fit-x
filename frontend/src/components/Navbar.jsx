import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-rose-800 h-16 text-white flex justify-between items-center gap-4 px-2 border-none">
      <h2>FITX</h2>
      <div className="flex justify-end gap-3">
        <NavLink to="/">dashboard</NavLink>
        <NavLink to="/exercise">exercise</NavLink>
        <NavLink to="/food">food</NavLink>
        <NavLink to="/goal">goal</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
