import { types } from "../types";

export function EditPage() {
  return {
    action: types.EDIT_PAGE,
  };
}

export function EditPageFalse() {
  return {
    action: types.EDIT_PAGE_FALSE,
  };
}
