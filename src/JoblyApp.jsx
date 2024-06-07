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

  /** Logs in a user with a valid username/password.
   *
   * Updates state with token.
   * If login fails to authenticate, renders error message.
  */

  //TODO: probably need to try/catch the logInUser method. Figure out how to catch bad login input.
  async function handleLogin(formData) {
    console.log("handleLogin: formData", formData);
    const loginResponse = await JoblyApi.logInUser(formData);
    console.log("loginResponse", loginResponse);
    if (loginResponse) {
      console.log("setToken, setCurrUser");
      setToken(JoblyApi.token);
      setCurrUser({
        username: formData.username
      });
      <Navigate to={"/"} />;
    } else if (!loginResponse) {
      return <Alert messages={loginResponse.error} />;
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
      <RoutesList currUser={currUser} handleLogin={handleLogin} />
    </div>
  );
};

export default JoblyApp;