import { ADD_USER, DELETE_USER } from "./actions";

function reducers(state = { users: [] }, action) {
  switch (action.type) {
    case ADD_USER:
      return Object.assign({}, state, {
        users: [
          ...state.users,
          {
            name: action.name,
            email: action.email,
            company: action.company,
          },
        ],
      });
    case DELETE_USER:
      return Object.assign({}, state, {
        users: state.users.filter((user) => user.name !== action.name),
      });
    default:
      return state;
  }
}

export default reducers;
