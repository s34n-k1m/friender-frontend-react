import React from "react";
import "./FriendDetail.css";

/** FriendDetail component
* Presentational component to display potential friend details.
* 
* Props:
* - friendInfo: object of friend info
*          {username, email, first_name, last_name, image_url, 
*           hobbies, interests, zip_code, friend_radius_miles}
* - currNum: current potential friend number
* - totalNum: total number of potential friends 
* 
* State: none
* 
* PotentialFriendsList -> FriendDetail
*/

function FriendDetail({ friendInfo, currNum, totalNum }) {
  const {
    first_name,
    last_name,
    hobbies,
    image_url,
    interests,
  } = friendInfo;

  return (
    <div className="FriendDetail card w-100">
      <div className="FriendDetail-body card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><h3 className="FriendDetail-title">{first_name} {last_name}</h3></li>
          <li className="list-group-item text-left"><b>Hobbies</b>: {hobbies}</li>
          <li className="list-group-item text-left"><b>Interests</b>: {interests}</li>
        </ul>
        <img className="FriendDetail-image card-img-bottom" src={image_url} alt={`User image ${first_name} ${last_name}`} />
      </div>
      <div className="FriendDetail-small card-footer">
        <small>
          Potential Friend {currNum} of {totalNum}.
        </small>
      </div>
    </div>
  );
}

export default FriendDetail;
