import { FETCH_BOOKS } from "../actions/book_types";

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
        case FETCH_BOOKS:
            return { ...state, all: action.payload.data };
        default:
            return state
    }
}