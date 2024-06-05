

/** List of job components
 *
 * Props: array of job objects
 * State: None
 *
 *
 * JobList -> JobCardList
 */

function JobCardList({ jobs }){
  return (
    <div>
      <ul>
        {jobs.map(job => {
          <li><JobCard job={job}/></li>
        })}
      </ul>
    </div>
  )
}

export default JobCardList;