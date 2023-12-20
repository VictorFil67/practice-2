import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUsers } from '../../API/users'

// export const getAllUsersThunc = createAsyncThunk('getUsers', async ({ skip, LIMIT }, ThunkAPI) => {
//   try {
//     const data = await getUsers(skip, LIMIT)
//     return data.users
//   } catch (error) {
//     console.log(error)
//     return ThunkAPI.rejectWithValue(error.response.data)
//   }
// })
export const getAllUsersThunc = createAsyncThunk('getUsers', ({ skip, LIMIT }) =>
  getUsers(skip, LIMIT)
)
