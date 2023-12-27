import { createSlice } from '@reduxjs/toolkit'

const handlePending = state => {
  state.isLoading = true
}
const handleFulfilled = state => {
  state.isLoading = false
}

const handleRejected = (state, { payload }) => {
  state.isLoading = false
  state.error = payload
}

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    isLoading: false,
    error: '',
  },
  extraReducers: builder => {
    builder
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
  },
})
export const rootReducer = rootSlice.reducer
