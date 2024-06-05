/** Company card
 *
 * Props: company object
 * State: None
 *
 * CompanyList -> CompanyCard
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

function CompanyCard({ company=defaultData }) {
  return (
    <div>
      <p><b>{company.name}</b></p>
      <p>{company.description}</p>
    </div>
  );
}

export default CompanyCard;