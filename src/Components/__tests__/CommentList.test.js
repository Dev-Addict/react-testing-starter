import React from "react";
import {mount} from "enzyme";

import Root from "../../Root";
import CommentList from "../CommentList";

let wrappedCommentList;
const comments = ['comment 1', 'comment 2', 'comment 3', 'comment 4'];

beforeEach(() => {
    wrappedCommentList = mount(
        <Root initialState={{comments}}>
            <CommentList/>
        </Root>
    );
});

afterEach(() => {
    wrappedCommentList.unmount();
});

it('creates one li per comment', () => {
    expect(wrappedCommentList.find('li').length).toEqual(comments.length);
});

it('shows the text for each comment', () => {
    expect(wrappedCommentList.render().text()).toEqual(comments.join(''));
});