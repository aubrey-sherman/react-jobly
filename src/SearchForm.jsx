import { useState } from "react";

/** Search bar for Jobly
 *
 * Props: onSubmit function
 * State: formData
 *
 * {CompanyList, JobList} -> SearchForm
 */

function SearchForm({ onSubmit }) {
  const [formData, setFormData] = useState(null);
  console.log("* SearchForm");

  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData(currData => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(formData.searchParam);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row justify-content-center">
        <div className="col-8">
          <input type="text"
                 name="searchParam"
                 className="form-control form-control-lg"
                 placeholder="Enter search term..."
                 onChange={handleChange}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-lg btn-primary">Search</button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;