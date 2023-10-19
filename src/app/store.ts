import { configureStore } from '@reduxjs/toolkit'
import pageStateReducer from './stateSlice'

export const store = configureStore({
  reducer: {
    pageState: pageStateReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch