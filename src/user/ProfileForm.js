import { useContext, useEffect, useState } from "react";
// import UploadImageForm from "./UploadImageForm";
import UserContext from "../auth/UserContext";
import "./ProfileForm.css";

/** ProfileForm Component
 * 
 * Props:
 * - uploadProfile: function passed down from App Component
 * 
 * State: 
 * - formData
 * - errorMessages
 * - successMessage
 * - isUpdating: T/F
 * - imageSource
 * 
 * Context: 
 * - currentUser: array of objects 
 *         [ {username, email, first_name, last_name, image_url, 
 *            hobbies, interests, zip_code, friend_radius_miles}, ... ]
 * 
 * App -> Router -> ProfileForm
 */

function ProfileForm({ updateProfile }) {
  const { currentUser } = useContext(UserContext);
  const {
    image_url,
    first_name,
    last_name,
    hobbies,
    interests,
    username,
    email,
    zip_code,
    friend_radius_miles
  } = currentUser;

  const [formData, setFormData] = useState({
    image_url,
    first_name,
    last_name,
    hobbies,
    interests,
    username,
    email,
    zip_code,
    friend_radius_miles,
    password: ""
  });
  const [errorMessages, setErrorMessages] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [imageSource, setImageSource] = useState(currentUser.image_url);

  useEffect(function updateUserProfile() {
    async function updateProfileAPICall() {
      let formToSubmit = new FormData();

      for (let key in formData) {
        formToSubmit.append(key, formData[key]);
      }
      console.debug("profileForm= ", formToSubmit);

      // let result = await signup(formToSubmit);
      const resUpdate = await updateProfile(formToSubmit);
      console.debug("Result: ", resUpdate);

      if (resUpdate.success) {
        setFormData(fData => ({ ...fData, password: "" }));
        setSuccessMessage("Successfully updated");
        setErrorMessages(null);
      } else {
        setSuccessMessage(null);
        setErrorMessages("Update Failed");
      }
    }

    if (isUpdating) {
      updateProfileAPICall();
      setIsUpdating(false)
    }

  }, [isUpdating, updateProfile, formData])

  /* Handles form submission */

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsUpdating(true);
  }

  /* Handles form data changes */

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({ ...fData, [name]: value }));
  }

  /** Handle changes of image file */

  function handleImageChange(evt) {
    setFormData((prevData) => ({
      ...prevData,
      image_url: evt.target.files[0],
    }));

    let reader = new FileReader();
    let file = evt.target.files[0]

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageSource(reader.result);
    };
  }

  /* Displays error message if wrong login info inputted */

  function displayErrorMessage() {
    return (
      <>
        {
          errorMessages
            ? <div className="alert alert-danger mt-3">{errorMessages}</div>
            : null
        }
      </>
    );
  }

  /* Displays success message if user profile update successful */

  function displaySuccessMessage() {
    return (
      <>
        {
          successMessage
            ? <div className="alert alert-success mt-3">{successMessage}</div>
            : null
        }
      </>
    );
  }

  return (
    <div className="ProfileForm col-md-6 col-lg-4 offset-md-3 offset-lg-4">
      <h3>{username} Profile</h3>
      <div className="card my-3">
        <div className="card-body">
          <img
            className="ProfileForm-image img-thumbnail"
            src={imageSource}
            alt="profile"
          />

          <form
            className="ProfileForm-form"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >

            <div className="ProfileForm-profileImg input-group mb-3">
              <div className="custom-file">
                <input
                  className="ProfileForm-imgInput custom-file-input"
                  type="file"
                  id="image_url"
                  name="image_url"
                  onChange={handleImageChange}
                />
                <label
                  className="ProfileForm-imgBrowse custom-file-label d-flex align-items-start"
                  htmlFor="image_url">
                  Upload a new profile image
                </label>
              </div>
              {/* <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="button">
                  Select
                </button>
              </div> */}
            </div>

            <div className="ProfileForm-info form-group">
              <label htmlFor="email" className="ProfileForm-email">Email</label>
              <input
                className="ProfileForm-email form-control flex-grow-1"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="first_name" className="ProfileForm-firstName">First Name</label>
              <input
                className="ProfileForm-firstName form-control flex-grow-1"
                name="first_name"
                id="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />

              <label htmlFor="last_name" className="ProfileForm-lastName">Last Name</label>
              <input
                className="ProfileForm-lastName form-control flex-grow-1"
                name="last_name"
                id="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />

              <label htmlFor="hobbies" className="ProfileForm-hobbies">Hobbies</label>
              <input
                className="ProfileForm-hobbies form-control flex-grow-1"
                name="hobbies"
                id="hobbies"
                value={formData.hobbies}
                onChange={handleChange}
                required
              />

              <label htmlFor="interests" className="ProfileForm-interests">Interests</label>
              <input
                className="ProfileForm-interests form-control flex-grow-1"
                name="interests"
                id="interests"
                value={formData.interests}
                onChange={handleChange}
                required
              />

              <label htmlFor="zip_code" className="ProfileForm-zipCode">Zip Code</label>
              <input
                className="ProfileForm-zipCode form-control flex-grow-1"
                name="zip_code"
                id="zip_code"
                value={formData.zip_code}
                onChange={handleChange}
                required
              />

              <label htmlFor="friend_radius_miles" className="ProfileForm-friendRadiusMiles">Friend Radius (Miles)</label>
              <input
                className="ProfileForm-friendRadiusMiles form-control flex-grow-1"
                type="number"
                min="0"
                name="friend_radius_miles"
                id="friend_radius_miles"
                value={formData.friend_radius_miles}
                onChange={handleChange}
                required
              />

              <label htmlFor="password" className="ProfileForm-password">Enter Password:</label>
              <input
                className="ProfileForm-password form-control flex-grow-1"
                name="password"
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {displayErrorMessage()}
              {displaySuccessMessage()}
              <button className="btn btn-primary mt-3">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default ProfileForm;