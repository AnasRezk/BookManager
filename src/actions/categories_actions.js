import axios from 'axios';
import { FETCH_CATEGORIES, FETCH_SINGLE_CATEGORY } from "./categories_types";

const rootUrl = 'http://localhost:3000/categories';

export function fetchCategories() {
    const url = `${rootUrl}`;

    const request = axios.get(url);

    return {
        type: FETCH_CATEGORIES,
        payload: request
    }
}

export function fetchSingleCategory(id) {
    const url = `${rootUrl}/${id}`;

    const request = axios.get(url);

    return {
        type: FETCH_SINGLE_CATEGORY,
        payload: request
    }
}