import { types } from "../types";

const initialState = {
  isLogged: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      const login = { ...state };
      login.isLogged = true;
      return login;

    case types.LOGOUT:
      const logout = { ...state };
      logout.isLogged = false;
      return logout;

    default:
      return state;
  }
}
