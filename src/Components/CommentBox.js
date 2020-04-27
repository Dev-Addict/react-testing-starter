import React, {Component} from 'react';

class CommentBox extends Component {
    state = {comment: ''};

    onCommentChange(event) {
        this.setState({comment: event.target.value});
    }

    onCommitSubmit(event) {
        event.preventDefault();

        this.setState({comment: ''});
    }

    render() {
        return (
            <div className="comment-box-container">
                <form onSubmit={}>
                    <h4>Add Comment</h4>
                    <textarea value={this.state.comment} onChange={this.onCommentChange}/>
                    <button type="submit"/>
                </form>
            </div>
        );
    }
}

export default CommentBox;
