import { FETCH_AUTHORS, FETCH_SINGLE_AUTHOR, CREATE_AUTHOR, UPDATE_AUTHOR, INIT_AUTHOR } from "../actions/authors_types";

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
        case INIT_AUTHOR:
            return { ...state, author: INITIAL_STATE.author };
        case FETCH_AUTHORS:
            return { ...state, all: action.payload.data };
        case FETCH_SINGLE_AUTHOR:
            return { ...state, author: action.payload.data };
        case CREATE_AUTHOR:
            return { ...state, author: null, all: [action.payload.data, ...state.all] };
        case UPDATE_AUTHOR:
            {
                const index = state
                    .all
                    .findIndex(h => h.id === state.author.id);
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
            return state
    }
}