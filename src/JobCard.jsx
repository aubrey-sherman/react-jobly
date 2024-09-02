/** Job card
 *
 * Props: job object like
 *        {id, title, salary, equity}
 * State: None
 *
 * JobCardList -> JobCard
 */

function JobCard({ job }) {
  console.log("* JobCard");

  return (
    <div>
      <p>{job.title}</p>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
    </div>
  );
}

export default JobCard;