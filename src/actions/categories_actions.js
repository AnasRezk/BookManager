import axios from 'axios';
import {
    FETCH_CATEGORIES,
    FETCH_SINGLE_CATEGORY,
    CREATE_CATEGORY,
    UPDATE_CATEGORY,
    INIT_CATEGORY
} from './categories_types';
import { ApiUrl } from '../utils/config';

const rootUrl = `${ApiUrl}categories`;

export function initCategory() {
    return {
        type: INIT_CATEGORY
    };
}

export function fetchCategories() {
    const url = `${rootUrl}`;

    const request = axios.get(url);

    return {
        type: FETCH_CATEGORIES,
        payload: request
    };
}

export function fetchSingleCategory(id) {
    const url = `${rootUrl}/${id}`;

    const request = axios.get(url);

    return {
        type: FETCH_SINGLE_CATEGORY,
        payload: request
    };
}

export function createCategory(values) {
    const request = axios.post(`${rootUrl}`, values);

    return {
        type: CREATE_CATEGORY,
        payload: request
    };
}

export function updateCategory(values) {
    const url = `${rootUrl}/${values.id}`;

    const request = axios.put(url, values);

    return {
        type: UPDATE_CATEGORY,
        payload: request
    };
}
