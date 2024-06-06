import { useState } from 'react';
import RoutesList from './RoutesList.jsx';


/** Component for entire page.
 *
 * Props: none
 * State: currUser => {
 *                      username,
 *                      firstName,
 *                      lastName,
 *                      isAdmin,
 *                      email,
 *                      applications: [jobID, ...]
 *                    }
 *
 * App -> RoutesList
*/

function JoblyApp() {
  const [currUser, setCurrUser] = useState(null);

  return (
    <div className="JoblyApp">
      <RoutesList currUser={currUser}/>
    </div>
  );
};

export default JoblyApp;