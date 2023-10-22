import { configureStore } from '@reduxjs/toolkit'
import {postsState} from './stateSlice'
import { postApi } from './postApi'

export const store = configureStore({
  reducer: {
    [postsState.name]: postsState.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware:(getDefaultMidleware)=> getDefaultMidleware().concat(postApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch