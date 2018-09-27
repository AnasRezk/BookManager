import { SET_EDIT_MODE, SET_CREATE_MODE } from "../actions/layout_types";

const INITIAL_STATE = {
    editMode: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_EDIT_MODE:
            return { ...state, editMode: action.payload };
        default:
            return state
    }
}