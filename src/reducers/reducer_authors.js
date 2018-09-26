import { FETCH_AUTHORS, FETCH_SINGLE_AUTHOR } from "../actions/authors_types";

const INITIAL_STATE = {
    all: [],
    author: {
        id: '',
        name: '',
        jobTitle: '',
        bio: ''
    }
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_AUTHORS:
            return { ...state, all: action.payload.data };
        case FETCH_SINGLE_AUTHOR:
            return { ...state, author: action.payload.data };
        default:
            return state
    }
}