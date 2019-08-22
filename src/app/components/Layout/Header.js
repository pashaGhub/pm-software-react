import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <nav className="Header--navigation">
        <NavLink exact className="Header--navigation-item" to="/">
          Projects
        </NavLink>
        <NavLink exact className="Header--navigation-item" to="/profile">
          Profile
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
