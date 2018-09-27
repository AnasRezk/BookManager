import { FETCH_BOOKS, FETCH_SINGLE_BOOK, INIT_BOOK, CREATE_BOOK } from "../actions/book_types";

const INITIAL_STATE = {
    all: [],
    book: {
        id: '',
        title: '',
        author: '',
        description: '',
        isbn: '',
        publishYear: '',
        pagesNumber: '',
        image: '',
        category: '',
    }
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case INIT_BOOK:
            return { ...state, book: INITIAL_STATE.book };
        case FETCH_BOOKS:
            return { ...state, all: action.payload.data };
        case FETCH_SINGLE_BOOK:
            return { ...state, book: action.payload.data };
        case CREATE_BOOK:
            return { ...state, post: null, all: [action.payload.data, ...state] };
        default:
            return state
    }
}