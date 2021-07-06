import { types } from "../types";

export function postUsers() {
  return {
    action: types.POST_USERS,
  };
}

export function clearUsersList() {
  return {
    action: types.CLEAR_USERS_DATA,
  };
}

export function deleteUser() {
  return {
    action: types.DELETE_USER,
  };
}

export function editUser() {
  return {
    action: types.EDIT_USER,
  };
}
