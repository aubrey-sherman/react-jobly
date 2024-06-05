import SearchForm from "./SearchForm.jsx";
import CompanyCardList from "./CompanyCardList.jsx";

/** List all companies
 *
 * Props: None
 * State: Array of companies, Search parameter
 *
 * RoutesList -> CompanyList -> {SearchForm, CompanyCardList}
 */

const defaultData = {
  companies: [
    {
      handle: "j_and_a",
      name: "Jacob and Aubrey LLC",
      description: "white hat hacking since 2024",
      numEmployees: 3,
      logoUrl: 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/960w/products/581/9741/Cowboy-white-Rubber-Duck-Adline-2__09087.1653230173.jpg'
    }
  ]
};

function CompanyList() {
  console.log("* CompanyList");

  return (
    <div>
      <SearchForm />
      <CompanyCardList companies={defaultData.companies} />
    </div>
  );
};

export default CompanyList;