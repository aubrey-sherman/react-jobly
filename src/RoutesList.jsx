import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import Homepage from "./Homepage.jsx";
import CompanyList from "./CompanyList.jsx";
import CompanyDetail from "./CompanyDetail.jsx";
import JobList from "./JobList.jsx";

/** Routes for Jobly
 *
 * Props: None
 * State: None
 *
 * App -> RoutesList -> {Navigation, Homepage, CompanyList, CompanyDetail, JobList}
 */

function RoutesList() {
  console.log("* RoutesList");

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:handle" element={<CompanyDetail />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesList;