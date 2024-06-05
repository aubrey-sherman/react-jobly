import SearchForm from "./SearchForm.jsx";

/** List all companies
 *
 * Props: None
 * State: Array of companies, Search parameter
 *
 * RoutesList -> CompanyList -> {SearchForm, CompanyCardList}
 */

function CompanyList() {
  return (
    <div>
      <SearchForm />
      <p>Companies</p>
    </div>
  )
}

export default CompanyList;