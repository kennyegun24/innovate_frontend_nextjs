import { configureStore, createAction } from "@reduxjs/toolkit";
import userReducer from "./user_auth/userReducer";
import { createWrapper } from "next-redux-wrapper";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// assigning store to next wrapper
const makeStore = () => store;

export { store };
export const wrapper = createWrapper(makeStore);
