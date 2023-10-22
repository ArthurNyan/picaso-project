import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from '../shared/lib/Post'

export const postApi = createApi({
    reducerPath: 'post',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], { limit: number, userId: number }>({
            query: ({ limit = 10, userId = 1 }) => `?_${limit}=10&_page=${userId}`
        }),
        fetchPostById: build.query<IPost, { id: number | string }>({
            query: ({ id }) => `/${id}`
        })
    })
})

export const { useFetchAllPostsQuery, useFetchPostByIdQuery } = postApi;