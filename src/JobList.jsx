import SearchForm from "./SearchForm.jsx";

/** List of all jobs
 *
 * Props: None
 * State: Array of jobs, Search parameter
 *
 * RoutesList -> JobList -> {SearchForm, JobCardList}
 */

function JobList() {
  return (
    <div>
      <SearchForm />
      <p>Jobs</p>
    </div>
  )
}

export default JobList;