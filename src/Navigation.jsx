import { NavLink } from "react-router-dom";

/** Navbar for Jobly
 *
 * Props: currUser => {
 *                      username,
 *                      firstName,
 *                      lastName,
 *                      isAdmin,
 *                      email,
 *                      applications: [jobID, ...]
 *                    }
 * State: None
 *
 * App -> Navigation
 */

function Navigation({ currUser }) {
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
        {currUser === null
        ?
        <>
          <li className="nav-item px-2">
            <NavLink
              to={'/login'}
            >
              Login
            </NavLink>
          </li>

          <li>
            <NavLink
              to={'/signup'}
            >
              Signup
            </NavLink>
          </li>
        </>
        :
        <>
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

          <li className="nav-item px-2">
            <NavLink
              to={'/profile'}
            >
              Profile
            </NavLink>
          </li>

          <li className="nav-item px-2">
            <NavLink
              to={'/logout'}
            >
              Logout {currUser.username}
            </NavLink>
          </li>
        </>
        }
      </ul>
    </nav>
  );
}

export default Navigation;