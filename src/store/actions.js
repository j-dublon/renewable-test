export const FETCH_USERS_PENDING = "FETCH_USERS_PENDING";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_EMAIL = "FILTER_BY_EMAIL";
export const FILTER_BY_COMPANY = "FILTER_BY_COMPANY";

export function fetchUsersPending() {
  return {
    type: FETCH_USERS_PENDING,
  };
}

export function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: { users },
  };
}

export function fetchUsersError(error) {
  return {
    type: FETCH_USERS_ERROR,
    payload: { error },
  };
}

export function addUser(user) {
  return { type: ADD_USER, user };
}

export function deleteUser(userName) {
  return { type: DELETE_USER, payload: userName };
}

export function filterByName(payload) {
  return { type: FILTER_BY_NAME, payload };
}

export function filterByEmail(payload) {
  return { type: FILTER_BY_EMAIL, payload };
}

export function filterByCompany(payload) {
  return { type: FILTER_BY_COMPANY, payload };
}
