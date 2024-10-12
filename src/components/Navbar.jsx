import React from "react";
import "./Navbar.css";

const Navbar = ({ handleNavClick }) => {
  return (
    <nav className="navbar">
      <button onClick={() => handleNavClick(0)}>About me</button>
      <button onClick={() => handleNavClick(1)}>Projects</button>
      <button onClick={() => handleNavClick(2)}>Something</button>
      <button onClick={() => handleNavClick(3)}>Something else</button>
    </nav>
  );
};

export default Navbar;