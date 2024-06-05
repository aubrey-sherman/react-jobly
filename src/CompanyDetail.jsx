import { useParams } from "react-router-dom";
import JoblyApi from "./api.js";
import JobCardList from "./JobCardList.jsx";

/** Company detail page
 *
 * Props: company object
 * State: None
 *
 * RoutesList -> CompanyDetail -> JobCardList
 */

const defaultData = {
  name: "Jacob and Aubrey LLC",
  description: "white hat hacking since 2024",
  jobs: [
    {
      "id": 91,
      "title": "Hacker",
      "salary": 122000,
      "equity": "0.047"
    },
  ]
};

function CompanyDetail({ company=defaultData }) {
  // get query params => const { param } = useParams();
  // API call
  return(
    <div>
      <h1>{company.name}</h1>
      <h3>{company.description}</h3>
      <JobCardList jobs={company.jobs}/>
    </div>
  );
}

export default CompanyDetail;