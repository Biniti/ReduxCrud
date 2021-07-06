import { types } from "../types";

const initialState = {
  isEditPage: false,
};

export default function edit(state = initialState, action) {
  switch (action.type) {
    case types.EDIT_PAGE:
      const editPage = { ...state };
      editPage.isEditPage = !editPage.isEditPage;
      return editPage;

    case types.EDIT_PAGE_FALSE:
      const editPageFalse = { ...state };
      editPageFalse.isEditPage = false;
      return editPageFalse;

    default:
      return state;
  }
}
