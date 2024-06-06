import JobCard from "./JobCard";

/** List of job components
 *
 * Props: array of job objects
 * State: None
 *
 *
 * JobList -> JobCardList
 */
function JobCardList({ jobs }) {
  console.log("* JobCardList", jobs);

  return (
    <div>
      <div>
        {jobs.map(job => {
          return (
            <div key={job.id} className="card-body border">
              <JobCard job={job} />
            </div>);
        })}
      </div>
    </div >
  );
};

export default JobCardList;