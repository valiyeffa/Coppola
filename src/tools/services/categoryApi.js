import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const categoryApi =createApi({
    reducerPath:'categoryApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3002/api',
        prepareHeaders: (headers) => {
            headers.set()
            return headers
        }
    })
})