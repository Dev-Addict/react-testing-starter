import React from "react";
import {mount} from "enzyme";

import CommentBox from "../CommentBox";

const doesCommentBoxContain = component => () => {
    const wrappedCommentBox = mount(<CommentBox/>);

    expect(wrappedCommentBox.find(component).length).toEqual(1);

    wrappedCommentBox.unmount();
};

it('has a textarea', doesCommentBoxContain('textarea'));

it('has a button', doesCommentBoxContain('button'));

it('has a header', doesCommentBoxContain('h4'));