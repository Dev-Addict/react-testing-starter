import React from "react";
import ReactDOM from "react-dom";
import {shallow} from "enzyme";

import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

it('doesn\'t crash', () => {
    const containerDiv = document.createElement('div');

    ReactDOM.render(<App/>, containerDiv);

    ReactDOM.unmountComponentAtNode(containerDiv);
});

const doesAppContain = component => () => {
    const wrappedApp = shallow(<App/>);

    expect(wrappedApp.find(component).length).toEqual(1);
};

it('shows a single CommentBox component.', doesAppContain(CommentBox));

it('shows a single CommentList component.', doesAppContain(CommentList));