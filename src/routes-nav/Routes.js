import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import PrivateRoute from "./PrivateRoute";
import PotentialFriendsList from "../friends/PotentialFriendsList";
import Profile from "../user/Profile";

/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 * 
 * App -> Routes -> {LoginForm, SignupForm, PotentialFriendsList, Profile}
 */

function Routes({ login, signup, uploadImage, like, dislike }) {
  console.debug(
      "Routes",
      `login=${typeof login}`,
      `register=${typeof register}`,
  );

  return (
      <div className="pt-5">
        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/login">
            <LoginForm login={login} />
          </Route>

          <Route exact path="/signup">
            <SignupForm signup={signup} />
          </Route>

          <PrivateRoute exact path="/find-friends">
            <PotentialFriendsList like={like} dislike={dislike}/>
          </PrivateRoute>

          <PrivateRoute exact path="/profile">
            <Profile uploadImage={uploadImage} />
          </PrivateRoute>

          <Redirect to="/" />
        </Switch>
      </div>
  );
}

export default Routes;
