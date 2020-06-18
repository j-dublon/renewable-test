import {
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  ADD_USER,
  DELETE_USER,
  FILTER_BY_NAME,
  FILTER_BY_EMAIL,
  FILTER_BY_COMPANY,
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
      return Object.assign({}, state, {
        users: [...state.users.filter((user) => user.name !== action.payload)],
      });
    case FILTER_BY_NAME:
      const searchName = action.payload.toLowerCase();
      const filteredByName = state.users.filter((user) => {
        return user.name.toLowerCase().includes(searchName);
      });
      return { ...state, users: filteredByName };
    case FILTER_BY_EMAIL:
      const searchEmail = action.payload.toLowerCase();
      const filteredByEmail = state.users.filter((user) => {
        return user.email.toLowerCase().includes(searchEmail);
      });
      return { ...state, users: filteredByEmail };
    case FILTER_BY_COMPANY:
      const searchCompany = action.payload.toLowerCase();
      const filteredByCompany = state.users.filter((user) => {
        return user.company.toLowerCase().includes(searchCompany);
      });
      return { ...state, users: filteredByCompany };
    default:
      return state;
  }
}

export default reducers;
