import { createSlice } from '@reduxjs/toolkit'

import { getAllUsersThunc } from './usersThunk'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isloading: false,
    error: '',
    filterQuery: '',
  },
  reducers: {
    setFilterQuery: (state, action) => {
      state.filterQuery = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllUsersThunc.pending, (state, action) => {
      state.isloading = true
    })
    builder.addCase(getAllUsersThunc.fulfilled, (state, action) => {
      state.users = action.payload.users
      state.isloading = false
      state.error = ''
    })
    builder.addCase(getAllUsersThunc.rejected, (state, action) => {
      console.log(action)
      state.isloading = false
      state.error = action.error.message
    })
  },
})

export const { setFilterQuery } = usersSlice.actions

export const userReduser = usersSlice.reducer
