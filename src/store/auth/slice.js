import { createSlice } from '@reduxjs/toolkit'
import { signInThunk, signUpThunk } from './thunks'

const initialState = {
  token: '',
  user: null,
  isLoading: false,
  error: null,
}

const handlePending = state => {
  state.isLoading = true
}
const handleFulfilled = (state, { payload }) => {
  state.user = payload.user
  state.token = payload.token
  state.isLoading = false
}
const handleRejected = (state, { payload }) => {
  state.isLoading = false
  state.error = payload
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: state => {
      state.user = null
      state.token = ''
    },
  },
  extraReducers: builder => {
    builder
      //   .addCase(signUpThunk.pending, handlePending)
      .addCase(signUpThunk.fulfilled, handleFulfilled)
      //   .addCase(signUpThunk.rejected, handleRejected)
      //   .addCase(signInThunk.pending, handlePending)
      .addCase(signInThunk.fulfilled, handleFulfilled)
      //   .addCase(signInThunk.rejected, handleRejected)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      //   .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
  },
})

export const authReducer = authSlice.reducer

export const { logOut } = authSlice.actions
