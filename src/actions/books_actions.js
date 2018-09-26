import axios from 'axios';
import { FETCH_BOOKS, FETCH_SINGLE_BOOK } from "./book_types";

const rootUrl = 'http://localhost:3000/books';


export function fetchBooks() {
    const url = `${rootUrl}`;

    const request = axios.get(url);

    return {
        type: FETCH_BOOKS,
        payload: request
    }
}

export function fetchSingleBook(id) {
    const request = axios.get(`${rootUrl}/${id}`);

    return {
        type: FETCH_SINGLE_BOOK,
        payload: request
    }
}


export function fetchAuthorBooks(autherId) {

    const url = `${rootUrl}?author=${autherId}`;

    const request = axios.get(url);

    return {
        type: FETCH_BOOKS,
        payload: request
    }
}

export function fetchCategoryBooks(categoryId) {

    const url = `${rootUrl}?category=${categoryId}`;

    const request = axios.get(url);

    return {
        type: FETCH_BOOKS,
        payload: request
    }
}

