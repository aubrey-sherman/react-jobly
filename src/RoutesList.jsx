import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import Homepage from "./Homepage.jsx";
import CompanyList from "./CompanyList.jsx";
import CompanyDetail from "./CompanyDetail.jsx";
import JobList from "./JobList.jsx";
import LoginForm from "./LoginForm.jsx";
import SignupForm from "./SignupForm.jsx";
import ProfileForm from "./ProfileForm.jsx";
import Logout from "./Logout.jsx";

/** Routes for Jobly
 *
 * Props: currUser => {
 *                      username,
 *                      firstName,
 *                      lastName,
 *                      isAdmin,
 *                      email,
 *                      applications: [jobID, ...]
 *                    }
 *        handleLogin function
 *
 * State: None
 *
 * JoblyApp -> RoutesList -> {Navigation, LoginForm, SignupForm, Logout, Homepage, CompanyList, CompanyDetail, JobList}
 */

function RoutesList({ currUser, handleLogin }) {
  console.log("* RoutesList");
  return (
    <div>
      <BrowserRouter>
        <Navigation currUser={currUser} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          {currUser === null &&
            <>
              <Route path="/login" element={<LoginForm handleLogin={handleLogin}/>} />
              <Route path="/signup" element={<SignupForm />} />
            </>
          }
          {currUser !== null &&
            <>
              <Route path="/profile" element={<ProfileForm />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/companies" element={<CompanyList />} />
              <Route path="/companies/:handle" element={<CompanyDetail />} />
              <Route path="/jobs" element={<JobList />} />
            </>
          }
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesList;