import { useState } from 'react';
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
  const [token, setToken] = useState(null);

  /** Logs in a user with a valid username/password.
   *
   * Updates state with token.
   * If login fails to authenticate, renders error message.
  */
  async function handleLogin(formData) {
    const loginResponse = await JoblyApi.logInUser(formData);
    if (loginResponse.token) {
      setToken(JoblyApi.token);
    } else if (loginResponse.error) {
      return <Alert messages={loginResponse.error} />;
    }
  }

  // TODO: write effect with token as dependency


  return (
    <div className="JoblyApp">
      <RoutesList currUser={currUser} />
    </div>
  );
};

export default JoblyApp;