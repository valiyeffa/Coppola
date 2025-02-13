import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../environments/environment";
import Cookies from "universal-cookie";

const cookies = new Cookies(null, { path: '/' });

export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${environment.baseUrl}` }),

    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: ({ search }) => {
                let url = '/blogs';
                if (search) {
                    url += `?search=${encodeURIComponent(search)}`;
                }
                return url;
            }
        }),
        getBlogsDetail: builder.query({
            query: (id) => `/blogs/${id}`
        }),
        addImages: builder.mutation({
            query: (imageFile) => {
                const formData = new FormData();
                formData.append('image', imageFile);
                return {
                    url: '/upload/images',
                    method: 'POST',
                    body: formData,
                    headers: {
                        Authorization: `Bearer ${cookies.get('x-auth-token')}`
                    }
                }
            }
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
        }),
        deleteBlog: builder.mutation({
            query: (id) => ({
                url: `/blogs/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${cookies.get('x-auth-token')}`
                }
            })
        }),
        updateBlog: builder.mutation({
            query: ({ id, ...blog }) => ({
                url: `/blogs/${id}`,
                method: 'POST',
                body: blog,
                headers: {
                    Authorization: `Bearer ${cookies.get('x-auth-token')}`
                }
            })
        })
    })
})

export const { useGetBlogsQuery, useGetBlogsDetailQuery, useAddImagesMutation, useAddBlogMutation, useDeleteBlogMutation, useUpdateBlogMutation } = blogApi;