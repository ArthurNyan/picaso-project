import { configureStore } from '@reduxjs/toolkit'
import postsStateReducer from './stateSlice'

export const store = configureStore({
  reducer: {
    posts: postsStateReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch