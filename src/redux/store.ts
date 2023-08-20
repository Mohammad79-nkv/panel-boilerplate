import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./slices/auth";
import layoutReducer from "./slices/change-lang";
// import userReducer from "./slices/user";
// import roleReducer from "./slices/roles";
// import registerUserReducer from "./slices/registerUser";
// import sidebarReducer from "./slices/sidebar-image";
// import categoryReducer from "./slices/category";
// import productSpecification from "./slices/productSpecification";

const rootReducer = combineReducers({
  auth: authReducer,
  lang: layoutReducer,
//   user: userReducer,
//   role: roleReducer,
//   registerUser: registerUserReducer,
//   sidebar: sidebarReducer,
//   layout: layoutReducer,
//   category: categoryReducer,
//   productSpecification: productSpecification
});

const persistConfig = {
  key: "root",
  storage,
  blacklist:['productSpecification']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
