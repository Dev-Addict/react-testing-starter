import axios from 'axios';

import {ADD_COMMENT, GET_COMMENTS, CHANGE_AUTH} from "./types";

export const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        payload: comment
    };
};

export const getComments = () => {
    const response = axios.get('https://jsonplaceholder.typicode.com/comments');

    return {
        type: GET_COMMENTS,
        payload: response
    }
};

export const changeAuth = () => {
    return {
        type: CHANGE_AUTH
    };
};