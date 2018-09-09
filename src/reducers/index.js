import {combineReducers} from 'redux';
import messages from './messageReducer';

const rootReducer = combineReducers({
    messages: messages
});

export default rootReducer;