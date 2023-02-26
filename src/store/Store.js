import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/ToDo";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  }
});