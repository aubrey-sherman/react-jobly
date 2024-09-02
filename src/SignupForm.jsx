import { useState } from "react";
import { v4 as uuid } from "uuid";
import Alert from "./Alert.jsx";

/** Signup form for Jobly
 *
 * Props: handleSignup function, errors like ["message1", ...]
 * State: formData, errors
 *
 * RoutesList -> Signup Form
*/

function SignupForm({ handleSignup }) {
  const defaultFormData = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  };
  const [formData, setFormData] = useState(defaultFormData);
  const [errors, setErrors] = useState([]);
  console.log("* SignupForm");

  /** Update formData as user types into form fields */
  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData(currData => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }

  /** Sends formData to JoblyApp on form submission */
  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      await handleSignup(formData);
    }
    catch (errs) {
      setErrors(errs);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="justify-content-center">
        <div className="col-8">
          Username
          <input
            type="text"
            name="username"
            className="form-control form-control-lg"
            onChange={handleChange}
          />
          Password
          <input
            type="password"
            name="password"
            className="form-control form-control-lg"
            onChange={handleChange}
          />
          First name
          <input
            type="text"
            name="firstName"
            className="form-control form-control-lg"
            onChange={handleChange}
          />
          Last name
          <input
            type="text"
            name="lastName"
            className="form-control form-control-lg"
            onChange={handleChange}
          />
          Email
          <input
            type="email"
            name="email"
            className="form-control form-control-lg"
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-lg btn-primary">Submit</button>
        </div>
      </div>
      {errors.length > 0 && <Alert messageStyle="alert alert-danger" messages={errors} />}
    </form>
  );

}

export default SignupForm;