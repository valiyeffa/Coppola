import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { categoryApi } from "./services/categoryApi";
import { blogApi } from "./services/blogApi";

export const store = configureStore({
    reducer: {
        [categoryApi.reducerPath]: categoryApi.reducer,
        [blogApi.reducerPath]: blogApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(categoryApi.middleware)
        .concat(blogApi.middleware)
})

setupListeners(store.dispatch);