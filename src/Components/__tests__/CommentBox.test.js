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

const doesCommentBoxContain = (component, amount = 1) => () => {
    expect(wrappedCommentBox.find(component).length).toEqual(amount);
};

it('has a textarea.', doesCommentBoxContain('textarea'));

it('has 2 buttons.', doesCommentBoxContain('button', 2));

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