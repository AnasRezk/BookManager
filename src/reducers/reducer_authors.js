import {
    FETCH_AUTHORS_SUCCESS,
    CREATE_AUTHOR,
    UPDATE_AUTHOR,
    INIT_AUTHOR,
    FETCH_AUTHORS_FAIL,
    FETCH_SINGLE_AUTHOR_SUCCESS
} from '../actions/authors_types';

const INITIAL_STATE = {
    all: [],
    loaded: false,
    author: {
        id: '',
        name: '',
        jobTitle: '',
        bio: ''
    },
    error: null
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case INIT_AUTHOR:
            return { ...state, author: INITIAL_STATE.author };
        case FETCH_AUTHORS_SUCCESS:
            return { ...state, loaded: true, all: action.payload ? action.payload : [] };
        case FETCH_AUTHORS_FAIL:
            return { ...state, loaded: true, error: action.payload };
        case FETCH_SINGLE_AUTHOR_SUCCESS:
            return { ...state, author: action.payload };
        case CREATE_AUTHOR:
            return {
                ...state,
                author: null,
                all: [action.payload.data, ...state.all]
            };
        case UPDATE_AUTHOR: {
            const index = state.all.findIndex(h => h.id === state.author.id);
            if(index >= 0) {
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
