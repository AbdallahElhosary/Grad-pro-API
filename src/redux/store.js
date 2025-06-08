import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('appState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('appState', serializedState);
  } catch (err) {
    // Handle errors here
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

// Subscribe to store changes
store.subscribe(() => {
  saveState({
    settings: store.getState().settings
  });
});

export default store;
