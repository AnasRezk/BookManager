import axios from 'axios';
import { FETCH_BOOKS } from "./book_types";

const rootUrl = 'http://localhost:3000/books';


export function fetchBooks() {
    const url = `${rootUrl}`;

    const request = axios.get(url);
   
    return {
        type: FETCH_BOOKS,
        payload: request
    }
}
