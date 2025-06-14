import rootReducer from "./reducers/rootReducer";

// store.js
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false, // ⛔️ إلغاء فحص عدم التغيير
      serializableCheck: false, // ⛔️ لو فيه تحذيرات تانية ممكن كمان تعطلها
    }),
});

export default store;