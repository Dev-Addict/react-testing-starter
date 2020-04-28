import React from "react";
import {mount} from "enzyme";
import moxios from 'moxios';

import Root from "../Root";
import App from "../Components/App";

const response = {
    status: 200,
    response: [
        {body: 'comment 1'},
        {body: 'comment 2'},
        {body: 'comment 3'},
        {body: 'comment 4'},
        {body: 'comment 5'},
    ]
};

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', response);
});
afterEach(() => {
    moxios.uninstall();
});

it('can get comments and display them', done => {
    const wrappedApp = mount(
        <Root>
            <App/>
        </Root>
    );
    wrappedApp.find('.get-comments').simulate('click');
    moxios.wait(() => {
        wrappedApp.update();
        expect(wrappedApp.find('li').length).toEqual(response.response.length);
        done();
        wrappedApp.unmount();
    });
});