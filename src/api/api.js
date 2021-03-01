import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class FrienderApi {
  // the token for interactive with the API will be stored here.
  static token;

  /* Template for axios requests. User enters endpoint, data (optional),
   method (optional). Returns axios response data. */
   
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);
    let headers;
    if (FrienderApi.token) {
      headers = { Authorization: `${FrienderApi.token}` };
    }

    const url = `${BASE_URL}/${endpoint}`;
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, headers, params })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      // let message = err.response.data.error.message;
      let message = err.response.data.status;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get the current user. */

  static async getCurrentUser(user_id) {
    let res = await this.request(`users/${user_id}`);
    return res.user;
  }

  /** Get potential friends for a user */

  static async getPotentialFriends(user_id) {
    let res = await this.request(`users/${user_id}/potentials`);
    return res.user_options
  }
  
  /** Update user profile. */

  static async updateProfile(data, user_id) {
    let res = await this.request(`users/${user_id}/edit`, data, "post");
    return res.user;
  }

  /** Get token for login from username, password. */

  static async login(data) {
    let res = await this.request(`login`, data, "post");
    return res.token;
  }

  /** Signup for site. */

  static async signup(data) {
    let res = await this.request(`signup`, data, "post");
    return res.token;
  }

  /** Upload an image. */

  // static async uploadImage(data, user_id) {
  //   let headers = {
  //     "Content-Type": "multipart/form-data",
  //     "Authorization": `${FrienderApi.token}`
  //   }
  //   let url = `${BASE_URL}/users/${user_id}/image-upload`;
  //   let method = "POST";
  //   let res = await axios({ url, data, headers, method })

  //   return res.data.image_url;
  // }

  /** Like a potential friend. */

  static async likePotentialFriend(other_id) {
    let res = await this.request(`/users/like/${other_id}`, {}, "post");
    return res.status;
  }
  
  /** Dislike a potential friend. */

  static async dislikePotentialFriend(other_id) {
    let res = await this.request(`/users/dislike/${other_id}`, {}, "post");
    return res.status;
  }

}


export default FrienderApi;
