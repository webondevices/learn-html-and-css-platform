import actionTypes from "../constants/actionTypes";

export function changeProgress(step) {
  localStorage.setItem("progress", step);
  return {
    type: actionTypes.CHANGE_PROGRESS,
    payload: step
  };
}

export function getProgress() {
  return function(dispatch) {
    const progress = localStorage.getItem("progress");

    if (progress !== null) {
      dispatch(changeProgress(parseInt(progress)));
    } else {
      dispatch(changeProgress(0));
    }
  };
}
