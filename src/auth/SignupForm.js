import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../common/Alert";
import "./SignupForm.css";

/** Signup form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls signup function prop
 * - redirects to /find-friends route
 *
 * Routes -> SignupForm -> Alert
 * Routed as /signup
 */

function SignupForm({ signup }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    hobbies: "",
    interests: "",
    zip_code: "",
    coordinates: "",
    friend_radius_miles: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  /** Handle form submit:
   *
   * Calls signup func prop and, if successful, redirect to /find-friends.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await signup(formData);

    if (result.success) {
      history.push("/find-friends");
    } else {
      setFormErrors(result.errors);
    }
  }

  /** Update form data field */

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
      <div className="SignupForm">
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <h2 className="mb-3">Sign Up</h2>
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                      name="username"
                      className="form-control"
                      value={formData.username}
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={formData.password}
                      onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>First Name</label>
                  <input
                      name="first_name"
                      className="form-control"
                      value={formData.first_name}
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                      name="last_name"
                      className="form-control"
                      value={formData.last_name}
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Hobbies</label>
                  <input
                      name="hobbies"
                      className="form-control"
                      value={formData.hobbies}
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Interests</label>
                  <input
                      name="interests"
                      className="form-control"
                      value={formData.interests}
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Zip Code</label>
                  <input
                      name="zip_code"
                      className="form-control"
                      value={formData.zip_code}
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Friend Radius (Miles)</label>
                  <input
                      type="number"
                      min="0"
                      name="friend_radius_miles"
                      className="form-control"
                      value={formData.friend_radius_miles}
                      onChange={handleChange}
                  />
                </div>

                {formErrors.length
                    ? <Alert type="danger" messages={formErrors} />
                    : null
                }

                <button
                    type="submit"
                    className="btn btn-primary float-right"
                    onSubmit={handleSubmit}
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SignupForm;