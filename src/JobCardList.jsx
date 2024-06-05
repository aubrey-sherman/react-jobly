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
      <ul className="list-group">
        {jobs.map(job => {
          return (<li key={job.id} className="list-group-item"> <JobCard job={job} /></li>);
        })}
      </ul>
    </div >
  );
};

export default JobCardList;