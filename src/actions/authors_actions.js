import axios from 'axios';
import { FETCH_AUTHORS, FETCH_SINGLE_AUTHOR } from "./authors_types";

const rootUrl = 'http://localhost:3000/authors';

export function fetchAuthors() {
    const url = `${rootUrl}`;

    const request = axios.get(url);

    return {
        type: FETCH_AUTHORS,
        payload: request
    }
}

export function fetchSingleAuthor(id) {
    const url = `${rootUrl}/${id}`;

    const request = axios.get(url);

    return {
        type: FETCH_SINGLE_AUTHOR,
        payload: request
    }
}