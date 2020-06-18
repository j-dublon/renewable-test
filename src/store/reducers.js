import {
  ADD_USER,
  DELETE_USER,
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from "./actions";

const initialState = {
  pending: false,
  users: [],
  error: null,
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        users: action.payload,
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
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
