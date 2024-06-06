import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import JoblyApi from "./api.js";
import JobCardList from "./JobCardList.jsx";

/** Company detail page
 *
 * Props: None
 * State: {isLoading, data}
 *
 * RoutesList -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {
  const [company, setCompany] = useState({ data: null, isLoading: true });
  const { handle } = useParams();
  console.log("* CompanyDetail", company, handle);

  useEffect(function fetchCompanyOnRender() {
    async function fetchCompany() {
      const companyResponse = await JoblyApi.request(`companies/${handle}`);
      setCompany({
        data: companyResponse.company,
        isLoading: false
      });
    }
    fetchCompany();
  }, []);

  if (company.isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>{company.data.name}</h1>
      <h4>{company.data.description}</h4>
      <JobCardList jobs={company.data.jobs} />
    </div>
  );
}

export default CompanyDetail;