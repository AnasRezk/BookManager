import { FETCH_CATEGORIES } from "../actions/categories_types";

const INITIAL_STATE = {
    all: [],
    author: {
        id: '',
        name: ''
    }
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return { ...state, all: action.payload.data };
        default:
            return state
    }
}