import {addComment} from "../index";
import {ADD_COMMENT} from "../types";

describe('add comment', () => {
    const addCommentPayload = 'add comment payload';
    const action = addComment(addCommentPayload);
    it('has the correct type', () => {
        expect(action.type).toEqual(ADD_COMMENT);
    });

    it('has the correct payload', () => {
        expect(action.payload).toEqual(addCommentPayload);
    });
});