import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Planets() {
  return (
    <div className="planets">
      <h2>Planets</h2>
      <p>
      The solar system has eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. There are five officially recognized dwarf planets in our solar system: Ceres, Pluto, Haumea, Makemake, and Eris.
      </p>
      <nav>
        <NavLink to="planets/mars">Mars</NavLink>
        <NavLink to="planets/venus">Venus</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
