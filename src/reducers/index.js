import { combineReducers } from "redux";
import progress from "./progressReducer";

const rootReducer = combineReducers({
  progress
});

export default rootReducer;
