import React, { useState } from "react";
import Alert from "../common/Alert";

/** Upload Image Form
 *
 * Params: 
 * - uploadImage: parent fn to call when form submitted
 * 
 * State:
 * - SelectedFile
 * - formErrors
 * 
 * Routes -> UploadImageForm
 */

function UploadImageForm({ uploadImage }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formErrors, setFormErrors] = useState([]);

  /* Handle form input changes */
  function handleChange(evt) {
    setSelectedFile(evt.target.files[0])
  }

  /* Handle submit. Create a new FormData instance, add file, and call
  uploadImage (parent fn) with data. If success, push to /find-friends */
  
  // TODO: Add functionality to only allow image files
  // TODO: Create drag & drop functionality for images
  async function handleSubmit(evt) {
    evt.preventDefault();
    
    const data = new FormData();
    data.append('file', selectedFile);

    let result = await uploadImage(data);

    if (!result.success) {
      setFormErrors(result.errors);
    }
  }

  return (
    <div>
      <form
        id="uploadForm"
        encType="multipart/form-data"
        onSubmit={handleSubmit}>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleChange} />
        <button
          type="submit">
          Submit Image
        </button>
        {formErrors.length
          ? <Alert type="danger" messages={formErrors} />
          : null}
      </form>
    </div>
  )
}

export default UploadImageForm;