import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">home</Link>
      <Link to="/revenues">receitas</Link>
      <Link to="/tip">dicas</Link>
      <Link to="/About">sobre</Link>
    </nav>
  );
};

export default NavBar;
