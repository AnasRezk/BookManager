import axios from 'axios';
import { FETCH_AUTHORS } from "./authors_types";

const rootUrl = 'http://localhost:3000/authors';

export function fetchAuthors() {
    const url = `${rootUrl}`;

    const request = axios.get(url);

    return {
        type: FETCH_AUTHORS,
        payload: request
    }
}
