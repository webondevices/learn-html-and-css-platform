import actionTypes from './../constants/actionTypes';

export default function messageReducer(state = [], action) {
    switch(action.type) {
        case actionTypes.ADD_MESSAGE:
            return [...state, action.message];
            
        default:
            return state;
    }
}