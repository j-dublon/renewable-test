import {
  fetchUsersPending,
  fetchUsersSuccess,
  fetchUsersError,
} from "./actions";

function fetchUsers() {
  return (dispatch) => {
    dispatch(fetchUsersPending());
    fetch("https://renewable.exchange/test/users.json")
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchUsersSuccess(res.data));
        return res.data;
      })
      .catch((error) => {
        dispatch(fetchUsersError(error));
      });
  };
}

export default fetchUsers;
