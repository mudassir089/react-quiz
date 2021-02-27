import React from "react";
import { NavLink } from "react-router-dom";
import NavItems from "./NavItems";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light  justify-content-center">
        <NavLink
          style={{ color: "#565387" }}
          className="navbar-brand mr-auto"
          to="/"
        >
          <h1>Quiz App</h1>
        </NavLink>
        <NavItems />
      </nav>
    </div>
  );
}

export default NavBar;
