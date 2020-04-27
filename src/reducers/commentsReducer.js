import {ADD_COMMENT} from "../actions/types";

export default (state = [], action) => {
    if (action.type === ADD_COMMENT) {
        return [...state, action.payload];
    }
    return state;
};