import {
  fetchUsersPending,
  fetchUsersSuccess,
  fetchUsersError,
} from "./actions";

export function fetchUsers() {
  return (dispatch) => {
    dispatch(fetchUsersPending());
    return fetch("https://renewable.exchange/test/users.json")
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
