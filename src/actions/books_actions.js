import axios from 'axios';
import { FETCH_BOOKS, FETCH_SINGLE_BOOK, CREATE_BOOK, INIT_BOOK, UPDATE_BOOK } from "./book_types";

const rootUrl = 'http://localhost:3000/books';

export function initBook() {
    return {
        type: INIT_BOOK
    }
}

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

export function createBook(values) {
    debugger
    const request = axios.post(`${rootUrl}`, values);

    return {
        type: CREATE_BOOK,
        payload: request
    }
}

export function updateBook(values) {
    debugger
    const url = `${rootUrl}/${values.id}`;

    const request = axios.put(url, values);

    return {
        type: UPDATE_BOOK,
        payload: request
    }
}





