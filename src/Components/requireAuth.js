import React, {Component} from "react";
import {connect} from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponent extends Component {
        constructor(props) {
            super(props);
            this.shouldNavigate = this.shouldNavigate.bind(this);
        }

        componentDidMount() {
            this.shouldNavigate()
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            this.shouldNavigate()
        }

        shouldNavigate() {
            if (!this.props.auth) {
                this.props.history.push('/');
            }
        }

        render() {
            return <ChildComponent {...this.props}/>
        }
    }

    const mapStateToProps = state => {
        return {
            auth: state.auth
        };
    };

    return connect(mapStateToProps)(ComposedComponent);
};