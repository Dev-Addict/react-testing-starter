import React from "react";
import {mount} from "enzyme";

import Root from "../../Root";
import CommentBox from "../CommentBox";

let wrappedCommentBox;

beforeEach(() => {
    wrappedCommentBox = mount(
        <Root>
            <CommentBox/>
        </Root>
    );
});

afterEach(() => {
    wrappedCommentBox.unmount();
});

const doesCommentBoxContain = component => () => {
    expect(wrappedCommentBox.find(component).length).toEqual(1);
};

it('has a textarea.', doesCommentBoxContain('textarea'));

it('has a button.', doesCommentBoxContain('button'));

it('has a header.', doesCommentBoxContain('h4'));

describe('the textarea update', () => {
    const newCommentValue = 'new comment';
    beforeEach(() => {
        wrappedCommentBox.find('textarea').simulate('change', {
            target: {
                value: newCommentValue
            }
        });

        wrappedCommentBox.update();
    });

    it('has a textarea that users can type in.', () => {
        expect(wrappedCommentBox.find('textarea').prop('value')).toEqual(newCommentValue);
    });

    it('has a form that submit successfully', () => {
        wrappedCommentBox.find('form').simulate('submit');

        wrappedCommentBox.update();

        expect(wrappedCommentBox.find('textarea').prop('value')).toEqual('');
    });
});