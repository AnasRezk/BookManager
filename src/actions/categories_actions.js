import axios from 'axios';
import { FETCH_CATEGORIES } from "./categories_types";

const rootUrl = 'http://localhost:3000/categories';

export function fetchCategories() {
    const url = `${rootUrl}`;

    const request = axios.get(url);

    return {
        type: FETCH_CATEGORIES,
        payload: request
    }
}
