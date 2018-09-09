import actionTypes from './../constants/actionTypes';

export function addMessage(message) {
    return {
        type: actionTypes.ADD_MESSAGE,
        message: message
    };
}