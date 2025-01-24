import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../environments/environment";
import Cookies from "universal-cookie";

const cookies = new Cookies(null, { path: '/' });

export const blogApi = createApi({
    reducerPath: 'createApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${environment.baseUrl}` }),

    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => '/blogs'
        }),
        addBlog: builder.mutation({
            query: (newBlog) => ({
                url: '/blogs',
                method: 'POST',
                body: newBlog,
                headers: {
                    Authorization: `Bearer ${cookies.get('x-auth-token')}`
                }
            })
        })
    })
})

export const { useGetBlogsQuery, useAddBlogMutation } = blogApi;