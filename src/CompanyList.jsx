import SearchForm from "./SearchForm.jsx";
import CompanyCardList from "./CompanyCardList.jsx";
import JoblyApi from "./api.js";
import { useState, useEffect } from "react";

/** List all companies
 *
 * Props: None
 * State: Array of companies, Search parameter
 *
 * RoutesList -> CompanyList -> {SearchForm, CompanyCardList}
 */

function CompanyList() {
  const [companies, setCompanies] = useState({ data: null, isLoading: true });
  const [searchParam, setSearchParam] = useState("");
  console.log("* CompanyList", { companies, searchParam });

  useEffect(function fetchCompaniesOnSearch() {
    companies.isLoading = true;
    async function fetchCompanies() {
      let companyResponse;
      if (searchParam === "") {
        companyResponse = await JoblyApi.getCompanies();
      }
      else {
        companyResponse = await JoblyApi.findCompanies({ nameLike: searchParam });
      }
      setCompanies(
        {
          data: companyResponse,
          isLoading: false
        }
      );
    }
    fetchCompanies();
  }, [searchParam]);


  function onCompanySearch(searchParam) {
    setSearchParam(searchParam);
  }

  if (companies.isLoading) return <p>Loading...</p>;

  return (
    <div>
      <SearchForm onSubmit={onCompanySearch} />
      {searchParam
        ? <h3>Results for '{searchParam}'</h3>
        : <h3>All Companies</h3>
      }
      <CompanyCardList companies={companies.data} />
    </div>
  );
};

export default CompanyList;