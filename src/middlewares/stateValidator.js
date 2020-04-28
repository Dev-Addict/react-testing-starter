import {ADD_COMMENT, GET_COMMENTS} from "../actions/types";

export default ({dispatch}) => next => action => {
    if (action.type === ADD_COMMENT) {
        if (action.payload.constructor !== String) {
            return console.log('Error: we can\'t add comment(wrong type)');
        }
        if (action.payload === GET_COMMENTS && !action.payload.then) {
            return console.log('Error: we can\'t get the comments(wrong type)');
        }
    }
    next(action);
};