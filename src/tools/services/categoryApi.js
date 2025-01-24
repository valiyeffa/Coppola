import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../environments/environment";
import Cookies from "universal-cookie";
const cookies = new Cookies(null, { path: '/' });

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${environment.baseUrl}` }),

    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/users'
        }),
        getCategories: builder.query({
            query: () => '/category'
        }),
        addCategory: builder.mutation({
            query: (newCategory) => ({
                url: '/category',
                method: 'POST',
                body: newCategory,
                headers: {
                    Authorization: `Bearer ${cookies.get('x-auth-token')}`,
                    'Content-Type': 'application/json'
                }
            })
        }),
        updateCategory: builder.mutation({
            query: ({ id, ...category }) => ({
                url: `/category/${id}`,
                method: 'POST',
                body: category,
                headers: {
                    Authorization: `Bearer ${cookies.get('x-auth-token')}`,
                    'Content-Type': 'application/json'
                }
            })
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `/category/${id}`,
                method: 'DELETE',
                body: id,
                headers: {
                    Authorization: `Bearer ${cookies.get('x-auth-token')}`
                }
            })
        })
    })
})

export const { useGetUsersQuery, useGetCategoriesQuery, useAddCategoryMutation, useUpdateCategoryMutation, useDeleteCategoryMutation } = categoryApi;