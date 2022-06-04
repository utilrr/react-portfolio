import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <>
      <h1>MJH</h1>
      <ul>
        <Button variant="contained">
          <li>
            <NavLink to="/">About</NavLink>
          </li>
        </Button>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/resume">Resume</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
