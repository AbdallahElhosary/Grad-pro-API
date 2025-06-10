import rootReducer from "./reducers/rootReducer";

// store.js
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer,
  // You can add middleware or dev tools options here if needed
});

export default store;