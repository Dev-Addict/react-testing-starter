import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import {changeAuth} from "../actions";

class App extends Component {
    constructor(props) {
        super(props);
        this.renderAuthButton = this.renderAuthButton.bind(this);
    }

    renderAuthButton() {
        const buttonText = this.props.auth?'Log Out':'Sign In';
        return (
            <Link>
                <button onClick={this.props.changeAuth}>
                    {buttonText}
                </button>
            </Link>
        );
    }

    renderHeader() {
        return (
            <div className="app-header">
                <Link to="/">Home</Link>
                <Link to={"/post"}>Post</Link>
                {this.renderAuthButton()}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path="/" component={CommentList}/>
                <Route path="/post" component={CommentBox}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps, {changeAuth})(App);
