import actionTypes from "./../constants/actionTypes";

const initialState = {
  step: 1
};

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_PROGRESS:
      return { step: action.payload };

    default:
      return state;
  }
}
