import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="items-center justify-center bg-slate-100 max-w-7xl mx-auto py-4">
      <ul className="flex gap-5 items-center justify-center font-bold text-2xl">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/register">
          <li>Register</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
