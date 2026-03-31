import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./services/api";
import counterReducer from "./slices/counterSlice";
import authReducer from "./slices/authSlice";
import { useDispatch } from "react-redux";
// Create a function to make a fresh store for each request
export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      counter: counterReducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};

// Create the store instance
export const store = makeStore();

// Setup listeners for RTK Query
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof makeStore>;
export const useAppDispatch = () => useDispatch<AppDispatch>();