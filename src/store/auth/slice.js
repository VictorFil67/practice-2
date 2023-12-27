import { createSlice } from '@reduxjs/toolkit'
import { refreshThunk, signInThunk, signUpThunk } from './thunks'

const initialState = {
  token: '',
  user: null,
}
const handleFulfilled = (state, { payload }) => {
  if (payload) {
    state.user = payload.user
    state.token = payload.token
  }
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
      .addCase(signUpThunk.fulfilled, handleFulfilled)
      .addCase(signInThunk.fulfilled, handleFulfilled)
      .addCase(refreshThunk.fulfilled, handleFulfilled)
  },
})

export const authReducer = authSlice.reducer

export const { logOut } = authSlice.actions
