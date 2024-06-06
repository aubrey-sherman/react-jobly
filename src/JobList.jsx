import JobCardList from "./JobCardList.jsx";
import SearchForm from "./SearchForm.jsx";
import JoblyApi from "./api.js";
import { useState, useEffect } from "react";

/** List of all jobs
 *
 * Props: None
 * State: Array of jobs, Search parameter
 *
 * RoutesList -> JobList -> {SearchForm, JobCardList}
 */

function JobList() {
  const [jobs, setJobs] = useState({ data: null, isLoading: true });
  const [searchParam, setSearchParam] = useState("");
  console.log("* JobList", { jobs, searchParam });

  useEffect(function fetchJobsOnSearch() {
    jobs.isLoading = true;
    async function fetchJobs() {
      let jobResponse;
      if (searchParam === '') {
        jobResponse = await JoblyApi.getJobs();
      } else {
        jobResponse = await JoblyApi.findJobs({ title: searchParam });
      }
      setJobs(
        {
          data: jobResponse,
          isLoading: false
        }
      );
    }
    fetchJobs();
  }, [searchParam]);

  function onJobSearch(searchParam) {
    setSearchParam(searchParam);
  }

  if (jobs.isLoading) return <p>Loading...</p>;

  return (
    <div>
      <SearchForm onSubmit={onJobSearch} />
      {searchParam
        ? <h3>Results for '{searchParam}'</h3>
        : <h3>All Jobs</h3>}
      <JobCardList jobs={jobs.data} />
    </div>
  );
}

export default JobList;