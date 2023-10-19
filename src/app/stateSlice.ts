import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const pageState = createSlice({
  name: 'PageState',
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { update } = pageState.actions

export default pageState.reducer
