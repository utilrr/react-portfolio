import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <>
      <h1>MJH</h1>

      <ul>
        <Stack spacing={5} direction="row">
          <Button variant="contained" size="large">
            <li>
              <NavLink to="/">About</NavLink>
            </li>
          </Button>
          <Button variant="contained" size="large" color="success">
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "yellow",
              backgroundColor: "orange",
              borderColor: "green",
            }}
          >
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
          </Button>
          <Button variant="contained" size="large">
            <li>
              <NavLink to="/resume">Resume</NavLink>
            </li>
          </Button>
        </Stack>
      </ul>
    </>
  );
};

export default Navbar;
