import { FETCH_CATEGORIES, FETCH_SINGLE_CATEGORY } from "../actions/categories_types";

const INITIAL_STATE = {
    all: [],
    category: {
        id: '',
        name: ''
    }
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return { ...state, all: action.payload.data };
        case FETCH_SINGLE_CATEGORY:
            return { ...state, category: action.payload.data };
        default:
            return state
    }
}