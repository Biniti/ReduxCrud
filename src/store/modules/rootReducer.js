import { combineReducers } from "redux";
import user from "./user/reducers";
import load from "./load/reducers";
import data from "./data/reducers";
import edit from "./editPage/reducers";
export const reducer = combineReducers({
  user,
  load,
  data,
  edit,
});
