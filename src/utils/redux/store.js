import { configureStore } from "@reduxjs/toolkit";
import navegationReducer from "./slice/navegation/navegationSlice";

export const store = configureStore({
  reducer: {
    navegation: navegationReducer,
  },
});
