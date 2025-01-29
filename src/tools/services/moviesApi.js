import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../environments/environment";
import Cookies from "universal-cookie";

const cookies = new Cookies(null, { path: '/' });

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${environment.baseUrl}` }),

    endpoints: (builder) => ({
        getMovies: builder.query({
            query: () => '/products'
        }),
        addMovie: builder.mutation({
            query: (newMovie) => ({
                url: '/products',
                method: 'POST',
                body: newMovie,
                headers: {
                    Authorization: `Bearer ${cookies.get('x-auth-token')}`
                }
            })
        }),
        deleteMovie: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${cookies.get('x-auth-token')}`
                }
            })
        }),
        updateMovies: builder.mutation({
            query: ({ id, ...movies }) => ({
                url: `/products/${id}`,
                method: 'POST',
                body: movies,
                headers: {
                    Authorization: `Bearer ${cookies.get('x-auth-token')}`
                }
            })
        })
    })
})

export const { useGetMoviesQuery, useAddMovieMutation, useDeleteMovieMutation, useUpdateMoviesMutation } = moviesApi;