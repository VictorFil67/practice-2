import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUsers } from '../../API/users'

export const getAllUsersThunc = createAsyncThunk('getUsers', async ({ skip, LIMIT }) => {
  const data = await getUsers(skip, LIMIT)
  return data.users
})
