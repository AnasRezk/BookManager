import axios from "axios";
import {
  FETCH_AUTHORS,
  FETCH_SINGLE_AUTHOR,
  CREATE_AUTHOR,
  UPDATE_AUTHOR,
  INIT_AUTHOR
} from "./authors_types";

const rootUrl = "https://books-json-server.herokuapp.com/authors";

export function initAuthor() {
  return {
    type: INIT_AUTHOR
  };
}

export function fetchAuthors() {
  const url = `${rootUrl}`;

  const request = axios.get(url);

  return {
    type: FETCH_AUTHORS,
    payload: request
  };
}

export function fetchSingleAuthor(id) {
  const url = `${rootUrl}/${id}`;

  const request = axios.get(url);

  return {
    type: FETCH_SINGLE_AUTHOR,
    payload: request
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
