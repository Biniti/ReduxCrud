import { types } from "../types";

const initialState = {
  isLoading: false,
};

export default function loading(state = initialState, action) {
  switch (action.type) {
    case types.LOADING:
      const newState = { ...state };
      newState.isLoading = !newState.isLoading;
      return newState;

    default:
      return state;
  }
}
