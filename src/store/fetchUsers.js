import {
  fetchUsersPending,
  fetchUsersSuccess,
  fetchUsersError,
} from "./actions";
import axios from "axios";
const config = require("../config.json");

export function fetchUsers() {
  return (dispatch) => {
    dispatch(fetchUsersPending());
    return axios
      .get(`${config.api.invokeUrl}/users`)
      .then((res) => {
        dispatch(fetchUsersSuccess(res.data));
        return res.data;
      })
      .catch((error) => {
        dispatch(fetchUsersError(error));
      });
    // .then((json) => {
    //   if (json.error) {
    //     throw json.error;
    //   }
    //   dispatch(fetchUsersSuccess(json));
    //   return json;
    // })
    // .catch((error) => {
    //   dispatch(fetchUsersError(error));
    // });
  };
}
