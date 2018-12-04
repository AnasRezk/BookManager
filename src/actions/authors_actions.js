import axios from 'axios';
import {
    FETCH_AUTHORS_SUCCESS,
    FETCH_SINGLE_AUTHOR,
    CREATE_AUTHOR,
    UPDATE_AUTHOR,
    INIT_AUTHOR,
    FETCH_AUTHORS,
    FETCH_AUTHORS_FAIL,
    FETCH_SINGLE_AUTHOR_SUCCESS,
    FETCH_SINGLE_AUTHOR_FAIL
} from './authors_types';
import { ApiUrl } from '../utils/config';

const rootUrl = `${ApiUrl}authors`;

// Fetch Author
export function fetchAuthors() {
    return {
        type: FETCH_AUTHORS
    };
}

export function fetchAuthorsSuccess(authors) {
    return {
        type: FETCH_AUTHORS_SUCCESS,
        payload: authors
    };
}

export function fetchAuthorsFail(error) {
    return {
        type: FETCH_AUTHORS_FAIL,
        payload: error
    };
}

// Fetch Single Author
export function fetchSingleAuthor(id) {
    return {
        type: FETCH_SINGLE_AUTHOR,
        payload: id
    };
}

export function fetchSingleAuthorSuccess(author) {
    return {
        type: FETCH_SINGLE_AUTHOR_SUCCESS,
        payload: author
    };
}

export function fetchSingleAuthorFail(error) {
    return {
        type: FETCH_SINGLE_AUTHOR_FAIL,
        payload: error
    };
}

export function initAuthor() {
    return {
        type: INIT_AUTHOR
    };
}


export function createAuthor(values) {
    const request = axios.post(`${rootUrl}`, values);

    return {
        type: CREATE_AUTHOR,
        payload: request
    };
}

export function updateAuthor(values) {
    const url = `${rootUrl}/${values.id}`;

    const request = axios.put(url, values);

    return {
        type: UPDATE_AUTHOR,
        payload: request
    };
}
