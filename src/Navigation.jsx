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
 *        handleLogout
 *
 * State: None
 *
 * App -> Navigation
 */

function Navigation({ currUser, handleLogout }) {
  console.log("* Navigation");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <ul className="nav justify-content-center">
        <li className="nav-item px-2">
          <NavLink to={'/'} className='text-decoration-none'>Jobly</NavLink>
        </li>
        {currUser === null &&
          <>
            <li className="nav-item px-2">
              <NavLink to={'/login'} className='text-decoration-none'>Log In</NavLink>
            </li>

            <li>
              <NavLink to={'/signup'} className='text-decoration-none'>Sign Up</NavLink>
            </li>
          </>
        }
        {currUser &&
          <>
            <li className="nav-item px-2">
              <NavLink to={'/companies'}>Companies</NavLink>
            </li>

            <li className="nav-item px-2">
              <NavLink to={'/jobs'}>Jobs</NavLink>
            </li>

            <li className="nav-item px-2">
              <NavLink to={'/profile'}>Profile</NavLink>
            </li>

            <li className="nav-item px-2">
              <NavLink
                to={'/'}
                onClick={handleLogout}
              >
                Log Out {currUser.username}
              </NavLink>
            </li>
          </>
        }
      </ul>
    </nav>
  );
}

export default Navigation;