import { SET_EDIT_MODE } from './layout_types';


export function setEditMode(mode) {
    return {
        type: SET_EDIT_MODE,
        payload: mode
    };
}

