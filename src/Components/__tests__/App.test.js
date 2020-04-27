import React from "react";
import ReactDOM from "react-dom";

import App from "../App";
import CommentBox from "../CommentBox";

it('doesn\'t crash', () => {
    const containerDiv = document.createElement('div');

    ReactDOM.render(<App/>, containerDiv);

    ReactDOM.unmountComponentAtNode(containerDiv);
});

it('shows a CommentBox component.', () => {
    const containerDiv = document.createElement('div');

    ReactDOM.render(<App/>, containerDiv);

    expect(containerDiv).toHaveAnInstanceOf(CommentBox);

    ReactDOM.unmountComponentAtNode(containerDiv);
});