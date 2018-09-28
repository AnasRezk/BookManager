import { FETCH_CATEGORIES, FETCH_SINGLE_CATEGORY, CREATE_CATEGORY, UPDATE_CATEGORY, INIT_CATEGORY } from "../actions/categories_types";

const INITIAL_STATE = {
    all: [],
    category: {
        id: '',
        name: ''
    }
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case INIT_CATEGORY:
            return { ...state, category: INITIAL_STATE.category };
        case FETCH_CATEGORIES:
            return { ...state, all: action.payload.data };
        case FETCH_SINGLE_CATEGORY:
            return { ...state, category: action.payload.data };
        case CREATE_CATEGORY:
            return { ...state, category: null, all: [action.payload.data, ...state.all] };
        case UPDATE_CATEGORY:
            {
                const index = state.all.findIndex(h => h.id === state.category.id);
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