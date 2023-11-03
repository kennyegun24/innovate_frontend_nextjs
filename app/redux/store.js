"use client";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user_auth/userReducer";
import unauthPostDetailsDetails from "./unauth/postsReducer";
import unauthOtherUserDetails from "./unauth/otherUserDetalisSlice";
import articleSlice from "./blogReducer";
// import storage from "redux-persist/lib/storage/session";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// const createNoopStorage = () => {
//   return {
//     getItem(_key) {
//       return Promise.resolve(null);
//     },
//     setItem(_key, value) {
//       return Promise.resolve(value);
//     },
//     removeItem(_key) {
//       return Promise.resolve();
//     },
//   };
// };

// const storage =
//   typeof window === "undefined"
//     ? createNoopStorage()
//     : createWebStorage("session");

// const persistConfig = {
//   key: "root",
//   storage: storage,
// };

// const persistedUserReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: userReducer,
    singleUnauthPost: unauthPostDetailsDetails,
    unauthUserDetails: unauthOtherUserDetails,
    articles: articleSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// assigning store to next wrapper
// const persistor = persistStore(store);
// export { store, persistor };
export { store };
