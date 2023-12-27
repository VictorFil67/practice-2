import { createAsyncThunk } from '@reduxjs/toolkit'
import { setToken } from 'API/api'
import { refresh, signIn, signUp } from 'API/auth'

export const signUpThunk = createAsyncThunk('auth/signUp', async (body, thunkAPI) => {
  try {
    const res = await signUp(body)
    return res
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
export const signInThunk = createAsyncThunk('auth/signIn', async (body, thunkAPI) => {
  try {
    const res = await signIn(body)

    return res
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
export const refreshThunk = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.token

    if (token) {
      setToken(token)
      const res = await refresh()
      return res
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
