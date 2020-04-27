import React, {Component} from 'react';
import {connect} from 'react-redux';

class CommentList extends Component {
    render() {
        return (
            <div className="comment-list-container">
                CommentList
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments
    };
};

export default connect(mapStateToProps)(CommentList);
