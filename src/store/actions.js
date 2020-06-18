export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_EMAIL = "FILTER_BY_EMAIL";
export const FILTER_BY_COMPANY = "FILTER_BY_COMPANY";

export function addUser(text) {
  return { type: ADD_USER, text };
}

export function deleteUser(index) {
  return { type: DELETE_USER, index };
}

export function filterByName() {}

export function filterByEmail() {}

export function filterByCompany() {}
