import CompanyCard from "./CompanyCard";

/** Company Card
 *
 * Props: array of companies like
 *      [{handle, name, description, numEmployees, logoUrl}, ...]
 *
 * State: none
 *
 * CompanyList -> CompanyCardList -> CompanyCard
 */
function CompanyCardList({ companies }) {
  console.log("* CompanyCardList", companies);

  return (
    <div>
      <ul className="list-group">
        {companies.map(company => {
          return (<li key={company.handle} className="list-group-item"><CompanyCard /></li>);
        })}
      </ul>
    </div >
  );
}

export default CompanyCardList;