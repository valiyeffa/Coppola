import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { categoryApi } from "./services/categoryApi";
import { blogApi } from "./services/blogApi";
import { moviesApi } from "./services/moviesApi";

export const store = configureStore({
    reducer: {
        [categoryApi.reducerPath]: categoryApi.reducer,
        [blogApi.reducerPath]: blogApi.reducer,
        [moviesApi.reducerPath]: moviesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(categoryApi.middleware)
        .concat(blogApi.middleware)
        .concat(moviesApi.middleware)
})

setupListeners(store.dispatch);