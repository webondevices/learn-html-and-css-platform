import actionTypes from "../constants/actionTypes";

export function changeProgress(step) {
  return {
    type: actionTypes.CHANGE_PROGRESS,
    payload: step
  };
}
