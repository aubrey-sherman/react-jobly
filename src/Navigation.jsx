import { NavLink } from "react-router-dom";

/** Navbar for Jobly
 *
 * Props: None
 * State: None
 *
 * App -> Navigation
 */

function Navigation() {
  console.log("* Navigation");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <ul className="nav justify-content-center">
        <li className="nav-item px-2">
          <NavLink
            to={'/'}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink
            to={'/companies'}
          >
            Companies
          </NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink
            to={'/jobs'}
          >
            Jobs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;