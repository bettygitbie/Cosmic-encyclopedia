import { NavLink, Outlet } from "react-router-dom";
import NavigateBack from "./NavigateBack";

export default function NavLayout() {
  return (
    <div className="nav-layout">
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="planets">Planets</NavLink>
          <NavLink to="galaxies">Galaxies</NavLink>
          <NavLink to="stars">Stars</NavLink>
        </nav>
        <NavigateBack />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
