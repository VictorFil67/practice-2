import { createSlice } from '@reduxjs/toolkit'

import { getAllUsersThunc } from './usersThunk'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isloading: false,
    error: '',
  },
  extraReducers: builder => {
    builder.addCase(getAllUsersThunc.pending, (state, action) => {
      state.isloading = true
    })
    builder.addCase(getAllUsersThunc.fulfilled, (state, action) => {
      state.users = action.payload
      state.isloading = false
      state.error = ''
    })
    builder.addCase(getAllUsersThunc.rejected, (state, action) => {
      state.isloading = false
      state.error = action.payload
    })
  },
})
export const userReduser = usersSlice.reducer
