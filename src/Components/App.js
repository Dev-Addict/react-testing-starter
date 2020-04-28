import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

class App extends Component {
    render() {
        return (
            <div>
                <Route path="/" component={CommentList}/>
                <Route path="/post" component={CommentBox}/>
            </div>
        );
    }
}

export default App;
