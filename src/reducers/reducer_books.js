import {
  FETCH_BOOKS,
  FETCH_SINGLE_BOOK,
  INIT_BOOK,
  CREATE_BOOK,
  UPDATE_BOOK
} from "../actions/book_types";

const INITIAL_STATE = {
  all: [],
  pageCount: 0,
  perPage: 10,
  loaded: false,
  book: {
    id: "",
    title: "",
    author: "",
    description: "",
    isbn: "",
    publishYear: "",
    pagesNumber: "",
    image: "",
    category: ""
  }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INIT_BOOK:
      return { ...state, book: INITIAL_STATE.book };
    case FETCH_BOOKS:
      return {
        ...state,
        all: action.payload.data,
        loaded: true,
        pageCount: Math.ceil(
          action.payload.headers["x-total-count"] / state.perPage
        )
      };
    case FETCH_SINGLE_BOOK:
      return { ...state, book: action.payload.data };
    case CREATE_BOOK:
      return { ...state, book: null, all: [action.payload.data, ...state.all] };
    case UPDATE_BOOK: {
      const index = state.all.findIndex(h => h.id === state.book.id);
      if (index >= 0) {
        const all = [
          ...state.all.slice(0, index),
          action.payload.data,
          ...state.all.slice(index + 1)
        ];
        return { ...state, all };
      }
      return state;
    }
    default:
      return state;
  }
}
