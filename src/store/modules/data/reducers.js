import { types } from "../types";

const initialState = {
  users: [],
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case types.POST_USERS:
      const newUser = { ...state };
      newUser.users.push({ id: action.id, name: action.name });
      return newUser;

    case types.CLEAR_USERS_DATA:
      const newState = { ...state };
      newState.users = [];
      return newState;

    case types.DELETE_USER:
      const user = { ...state };
      user.users = state.users.filter((user) => {
        return user.id !== action.id;
      });
      return user;

    case types.EDIT_USER:
      const editUser = { ...state };
      const selectedUser = { ...state };
      const newList = { ...editUser };
      editUser.users.concat(selectedUser.users);
      let i = 0;
      newList.users = editUser.users.filter((user) => {
        if (user.id === action.id) {
          i++;
          if (i === 1 && !action.confirm) {
            return user;
          } else if (i === 2 && action.confirm) {
            return user;
          }
        }
        return user.id !== action.id;
      });
      return newList;
    default:
      return state;
  }
}
