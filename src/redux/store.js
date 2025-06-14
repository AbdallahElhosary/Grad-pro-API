import rootReducer from "./reducers/rootReducer";

// store.js
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;