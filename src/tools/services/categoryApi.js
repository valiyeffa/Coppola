import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../environments/environment";

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${environment.baseUrl}` }),

    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => '/category'
        }),

        addCategory: builder.mutation({
            query: (newCategory) => ({
                url: '/category',
                method: 'POST',
                body: newCategory,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
        }),
        updateCategory: builder.mutation({
            query: (category) => ({
                url: `/category/${category.id}`,
                method: 'PUT',
                body: category
            })
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `/category/${id}`,
                method: 'DELETE',
                body: id,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
        })
    })
})

export const { useGetCategoriesQuery, useAddCategoryMutation, useUpdateCategoryMutation, useDeleteCategoryMutation } = categoryApi;