import { useState } from "react";

/** Login form for Jobly
 *
 * Props: handleLogin function
 * State: formData
 *
 *
 * RoutesList -> LoginForm
*/

function LoginForm({ handleLogin }) {
  const [formData, setFormData] = useState({username: "", password: ""});
  console.log("LoginForm", formData);

  /** Update formData as user types into form fields */
  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData(currData => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }

  /** Sends formData to JoblyApp on form submission*/
  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row justify-content-center">
        <div className="col-8">
          <input
            type="text"
            name="username"
            className="form-control form-control-lg"
            placeholder="username"
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            className="form-control form-control-lg"
            placeholder="password"
            onChange={handleChange}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-lg btn-primary">Login</button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;