import { NavLink } from "react-router-dom";
import "./CompanyCard.css";

/** Company card
 *
 * Props: company object
 * State: None
 *
 * CompanyCardList -> CompanyCard
 */

const defaultData = {
  handle: "j_and_a",
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

function CompanyCard({ company = defaultData }) {
  console.log("* CompanyCard", company);


  return (
    <NavLink to={`/companies/${company.handle}`}>
      <div>
        <img src="https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/960w/products/581/9741/Cowboy-white-Rubber-Duck-Adline-2__09087.1653230173.jpg" />
        <p><b>{company.name}</b></p>
        <p>{company.description}</p>
      </div>
    </NavLink>
  );
}

export default CompanyCard;