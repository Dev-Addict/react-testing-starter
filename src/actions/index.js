import axios from 'axios';

import {ADD_COMMENT, GET_COMMENTS} from "./types";

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