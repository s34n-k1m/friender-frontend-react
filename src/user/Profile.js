import {useContext} from "react";
import UserContext from "../auth/UserContext";
import UploadImageForm from "./UploadImageForm";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!
// THIS FILE IS NOT BEING USED
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!

/** Profile Component
 * 
 * Props:
 * - uploadImage: function passed down from App Component
 * 
 * State: none
 * 
 * Context: 
 * - currentUser: array of objects 
 *         [ {username, email, first_name, last_name, image_url, 
 *            hobbies, interests, zip_code, friend_radius_miles}, ... ]
 * 
 * App -> Router -> Profile -> UploadImageForm
 */
function Profile({uploadImage}) {
  const { currentUser } = useContext(UserContext);
  const {
    first_name,
    last_name,
    hobbies,
    image_url,
    interests,
    username,
    email,
    zip_code,
    friend_radius_miles
  } = currentUser;

  return (
    <div>
      <h4 className="FriendDetail-title">{first_name} {last_name}</h4>
      <img className="FriendDetail-image" src={image_url} alt="User Image" />
      <UploadImageForm uploadImage={uploadImage} />
      <p className="FriendDetail-title">Username: {username}</p>
      <p className="FriendDetail-title">Email: {email}</p>
      <p className="FriendDetail-title">Hobbies include: {hobbies}</p>
      <p className="FriendDetail-title">Interests include: {interests}</p>
      <p className="FriendDetail-title">Zip Code: {zip_code}</p>
      <p className="FriendDetail-title">Friend Radius (miles): {friend_radius_miles}</p>
    </div>);

}

export default Profile;