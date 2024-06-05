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

// const defaultData = {
//   companies: [
//     {
//       handle: "j_and_a",
//       name: "Jacob and Aubrey LLC",
//       description: "white hat hacking since 2024",
//       numEmployees: 3,
//       logoUrl: 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/960w/products/581/9741/Cowboy-white-Rubber-Duck-Adline-2__09087.1653230173.jpg'
//     }
//   ]
// };

function CompanyList() {
  console.log("* CompanyList");
  const [companies, setCompanies] = useState({data: null, isLoading: true});
  const [searchParam, setSearchParam] = useState("");

  // useEffect(function fetchCompaniesOnMount() {
  //   async function fetchCompanies() {
  //     const companyResponse = await JoblyApi.request("companies");
  //     setCompanies(
  //       {
  //         data: companyResponse.companies,
  //         isLoading: false
  //       }
  //     );
  //   }
  //   fetchCompanies();
  // }, [ ]);


  useEffect(function fetchCompaniesOnSearch() {
    companies.isLoading = true;
    async function fetchCompanies() {
      let companyResponse;
      if(searchParam === "") {
        companyResponse = await JoblyApi.request("companies");
      }
      else {
        companyResponse = await JoblyApi.request("companies", {nameLike: searchParam});
      }
      setCompanies(
        {
          data: companyResponse.companies,
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
      <SearchForm onSubmit={onCompanySearch}/>
      {searchParam
        ? <h3>Results for '{searchParam}'</h3>
        : <h3>All Companies</h3>
      }
      <CompanyCardList companies={companies.data} />
    </div>
  );
};

export default CompanyList;