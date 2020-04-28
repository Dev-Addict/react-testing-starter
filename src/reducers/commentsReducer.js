import {ADD_COMMENT, GET_COMMENTS} from "../actions/types";

export default (state = [], action) => {
    if (action.type === ADD_COMMENT) {
        return [...state, action.payload];
    }
    if (action.type === GET_COMMENTS) {
        return action.payload.data.map(comment => comment.body);
    }
    return state;
};