import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import RoutesList from './RoutesList.jsx';
import JoblyApi from './api.js';


/** Component for entire page.
 *
 * Props: none
 * State:
 *        currUser => {
 *                      username,
 *                      firstName,
 *                      lastName,
 *                      isAdmin,
 *                      email,
 *                      applications: [jobID, ...]
 *                    }
 *        token (string)
 *
 * App -> RoutesList
*/

function JoblyApp() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState("");
  const [errors, setErrors] = useState([]);
  console.log("* JoblyApp", { currUser, token, errors });

  /** Logs in a user with a valid username/password.
   *
   * Updates state with token.
   * If login fails to authenticate, renders error message.
  */
  async function handleLogin(formData) {
    console.log("handleLogin: formData", formData);

    let loginResponse;
    try {
      loginResponse = await JoblyApi.logInUser(formData);
    } catch (errs) {
      console.log("Errors=", errs);
      console.log("loginResponse", loginResponse);
      setErrors(errs);
    }

    if (loginResponse) {
      setToken(loginResponse);
      setCurrUser({
        username: formData.username
      });
      <Navigate to={"/"} />;
    }
  }

  //TODO: make handleSignup and handleLogout functions

  useEffect(function fetchUserDataOnLogin() {
    async function fetchUserData() {
      if (currUser !== null) {
        const userResponse = await JoblyApi.getUserDetails(currUser.username);
        setCurrUser(currUserData => ({
          ...currUserData,
          firstName: userResponse.firstName,
          lastName: userResponse.lastName,
          email: userResponse.email,
          isAdmin: userResponse.isAdmin,
          applications: userResponse.applications
        }));
      }
    }
    fetchUserData();
  }, [token]);


  return (
    <div className="JoblyApp">
      <RoutesList currUser={currUser} handleLogin={handleLogin} errors={errors} />
    </div>
  );
};

export default JoblyApp;