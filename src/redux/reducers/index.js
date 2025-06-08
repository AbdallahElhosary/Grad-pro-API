import { combineReducers } from 'redux';
import settingsReducer from './settingsReducer';
import matrialReducer from './matrialReducer';

const rootReducer = combineReducers({
    settings: settingsReducer,
    matrial: matrialReducer,
});

export default rootReducer;