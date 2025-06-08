import { TOGGLE_DARK_MODE } from '../type';

const initialState = {
    darkMode: false,
};

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DARK_MODE:
            return {
                ...state,
                darkMode: !state.darkMode,
            };
        default:
            return state;
    }
};

export default settingsReducer;