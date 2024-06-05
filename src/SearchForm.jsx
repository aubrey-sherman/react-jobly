/** Search bar for Jobly
 *
 * Props: None
 * State: None
 *
 * {CompanyList, JobList} -> SearchForm
 */

function SearchForm() {
  return (
    <form>
      <div className="row justify-content-center">
        <div className="col-8">
          <input type="text" className="form-control form-control-lg" placeholder="Enter search term..."/>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-lg btn-primary">Search</button>
        </div>
      </div>
    </form>
  )
}

export default SearchForm;