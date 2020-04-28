import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addComment, getComments} from "../actions";

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {comment: ''};
        this.onCommentChange = this.onCommentChange.bind(this);
        this.onCommentSubmit = this.onCommentSubmit.bind(this);
    }

    onCommentChange(event) {
        this.setState({comment: event.target.value});
    }

    onCommentSubmit(event) {
        event.preventDefault();

        this.props.addComment(this.state.comment);
        this.setState({comment: ''});
    }

    render() {
        return (
            <div className="comment-box-container">
                <form onSubmit={this.onCommentSubmit}>
                    <h4>Add Comment</h4>
                    <textarea value={this.state.comment} onChange={this.onCommentChange}/>
                    <button type="submit">Submit</button>
                </form>
                <button onClick={this.props.getComments} className="get-comments">Get Comments</button>
            </div>
        );
    }
}

export default connect(null, {addComment, getComments})(CommentBox);
