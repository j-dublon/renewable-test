import {
  fetchUsersPending,
  fetchUsersSuccess,
  fetchUsersError,
} from "./actions";
const config = require("../config.json");

export function fetchUsers() {
  return (dispatch) => {
    dispatch(fetchUsersPending());
    return fetch(`${config.api.invokeUrl}/users`)
      .then((res) => res.json())
      .then((json) => {
        if (json.error) {
          throw json.error;
        }
        dispatch(fetchUsersSuccess(json));
        return json;
      })
      .catch((error) => {
        dispatch(fetchUsersError(error));
      });
  };
}
