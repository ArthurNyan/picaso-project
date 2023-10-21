import { IPost } from './../shared/lib/Post';
import { createSlice } from '@reduxjs/toolkit'

export const postsState = createSlice({
    name: 'postsState',
    initialState: {
        value: <IPost[]>[]
    },
    reducers: {
        update: (state, action) => {
            state.value = [...state.value, ...action.payload]
        },
    },
})

export const { update } = postsState.actions

export default postsState.reducer
