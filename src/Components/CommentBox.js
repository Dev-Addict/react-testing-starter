import React, {Component} from 'react';

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {comment: ''};
        this.onCommentChange = this.onCommentChange.bind(this);
        this.onCommitSubmit = this.onCommitSubmit.bind(this);
    }

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
                <form onSubmit={this.onCommentChange}>
                    <h4>Add Comment</h4>
                    <textarea value={this.state.comment} onChange={this.onCommentChange}/>
                    <button type="submit"/>
                </form>
            </div>
        );
    }
}

export default CommentBox;
