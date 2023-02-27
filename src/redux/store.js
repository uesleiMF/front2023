import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth/authSlice";
import casalReducer from "../redux/features/casal/casalSlice";
import filterReducer from "../redux/features/casal/filterSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    casal: casalReducer,
    filter: filterReducer,
  },
});
