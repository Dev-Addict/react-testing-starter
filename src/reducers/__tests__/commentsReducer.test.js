import commentsReducer from "../commentsReducer";
import {ADD_COMMENT} from "../../actions/types";
import {addComment} from "../../actions";

it(`handles actions of type ${ADD_COMMENT}`, () => {
    const newComment = 'new comment';
    const action = addComment(newComment);

    const state = commentsReducer([], action);

    expect(state).toEqual([newComment]);
});

it('handles actions of unknown type', function () {
    const action = {
        type: 'unknown'
    };

    const state = commentsReducer([], action);

    expect(state).toEqual([]);
});