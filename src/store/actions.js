export const FETCH_USERS_PENDING = "FETCH_USERS_PENDING";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_EMAIL = "FILTER_BY_EMAIL";
export const FILTER_BY_COMPANY = "FILTER_BY_COMPANY";

function fetchUsersPending() {
  return {
    type: FETCH_USERS_PENDING,
  };
}

function fetchUsersSuccess(Users) {
  return {
    type: FETCH_USERS_SUCCESS,
    users: Users,
  };
}

function fetchUsersError(error) {
  return {
    type: FETCH_USERS_ERROR,
    error: error,
  };
}

export function addUser(text) {
  return { type: ADD_USER, text };
}

export function deleteUser(index) {
  return { type: DELETE_USER, index };
}

export function filterByName() {}

export function filterByEmail() {}

export function filterByCompany() {}
