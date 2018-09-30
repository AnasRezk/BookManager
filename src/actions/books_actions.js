import axios from "axios";
import {
  FETCH_BOOKS,
  FETCH_SINGLE_BOOK,
  CREATE_BOOK,
  INIT_BOOK,
  UPDATE_BOOK,
  INIT_ALL_BOOKS
} from "./book_types";
import { ApiUrl } from "../utils/config";

const rootUrl = `${ApiUrl}books`;

export function initBook() {
  return {
    type: INIT_BOOK
  };
}

export function initAllBook() {
  return {
    type: INIT_ALL_BOOKS
  };
}

export function fetchBooks(pageNumber, pageSize) {
  const url = `${rootUrl}?_page=${pageNumber}&_limit=${pageSize}`;

  const request = axios.get(url);

  return {
    type: FETCH_BOOKS,
    payload: request
  };
}

export function fetchSingleBook(id) {
  const request = axios.get(`${rootUrl}/${id}`);

  return {
    type: FETCH_SINGLE_BOOK,
    payload: request
  };
}

export function fetchAuthorBooks(autherId) {
  const url = `${rootUrl}?author=${autherId}`;

  const request = axios.get(url);

  return {
    type: FETCH_BOOKS,
    payload: request
  };
}

export function fetchCategoryBooks(categoryId, pageNumber, pageSize) {
  const url = `${rootUrl}?category=${categoryId}&_page=${pageNumber}&_limit=${pageSize}`;

  const request = axios.get(url);

  return {
    type: FETCH_BOOKS,
    payload: request
  };
}

export function createBook(values) {
  const request = axios.post(`${rootUrl}`, values);

  return {
    type: CREATE_BOOK,
    payload: request
  };
}

export function updateBook(values) {
  const url = `${rootUrl}/${values.id}`;

  const request = axios.put(url, values);

  return {
    type: UPDATE_BOOK,
    payload: request
  };
}
