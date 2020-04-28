import {CHANGE_AUTH} from "../actions/types";

export default (state = false, action) => {
    if (action.type === CHANGE_AUTH) {
        return !state;
    }
    return state;
};