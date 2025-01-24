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
        addImages: builder.mutation({
            query: (newImg) => ({
                url: '/upload/images',
                method: 'POST',
                body: newImg,
                headers: {
                    Authorization: `Bearer ${cookies.get('x-auth-token')}`
                }
            })
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

export const { useGetBlogsQuery, useAddImagesMutation ,useAddBlogMutation } = blogApi;