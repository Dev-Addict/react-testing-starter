import React from "react";
import {mount} from "enzyme";

import CommentBox from "../CommentBox";
let wrappedCommentBox;

beforeEach(() => {
    wrappedCommentBox = mount(<CommentBox/>);
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

it('has a textarea that users can type in.', () => {
    const newCommentValue = 'new comment';

    wrappedCommentBox.find('textarea').simulate('change', {
        target: {
            value: newCommentValue
        }
    });

    wrappedCommentBox.update();

    expect(wrappedCommentBox.find('textarea').prop('value')).toEqual(newCommentValue);
});

it('has a form that submit successfully', () => {
    const newCommentValue = 'new comment';

    wrappedCommentBox.find('textarea').simulate('change', {
        target: {
            value: newCommentValue
        }
    });

    wrappedCommentBox.update();

    wrappedCommentBox.find('form').simulate('submit');

    wrappedCommentBox.update();

    expect(wrappedCommentBox.find('textarea').prop('value')).toEqual('');
});