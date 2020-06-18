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
        error: null,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        users: action.payload.users,
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    case ADD_USER:
      return Object.assign({}, state, {
        users: [
          ...state.users,
          {
            name: action.user.name,
            email: action.user.email,
            company: action.user.company,
          },
        ],
      });
    case DELETE_USER:
      console.dir(action);
      return Object.assign({}, state, {
        users: [...state.users.filter((user) => user.name !== action.payload)],
      });
    default:
      return state;
  }
}

export default reducers;
