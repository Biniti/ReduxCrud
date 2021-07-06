import { types } from "../types";

export function login() {
  return {
    action: types.LOGIN,
  };
}

export function logout() {
  return {
    action: types.LOGOUT,
  };
}
