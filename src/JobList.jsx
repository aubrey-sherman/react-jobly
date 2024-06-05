import JobCardList from "./JobCardList.jsx";
import SearchForm from "./SearchForm.jsx";

/** List of all jobs
 *
 * Props: None
 * State: Array of jobs, Search parameter
 *
 * RoutesList -> JobList -> {SearchForm, JobCardList}
 */

const defaultData = {
  jobs:
    [{
      id: 91,
      title: "Hacker",
      salary: 122000,
      equity: 0.047,
      companyHandle: "j_and_a",
      companyName: "Jacob and Aubrey LLC"
    }
    ]
};

function JobList() {
  console.log("* JobList");

  return (
    <div>
      <SearchForm />
      <JobCardList jobs={defaultData.jobs} />
    </div>
  );
}

export default JobList;