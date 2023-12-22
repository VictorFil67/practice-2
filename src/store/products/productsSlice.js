import { createSlice } from '@reduxjs/toolkit'
import { getProductsThunk } from './thunks'

const initialState = {
  products: null,
  isLoading: false,
  error: '',
  filter: '',
  page: 1,
  total: 0,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    changePage: (state, { payload }) => {
      state.page = payload
    },
    changeFilter: (state, { payload }) => {
      state.filter = payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getProductsThunk.pending, state => {
        state.isLoading = true
      })
      .addCase(getProductsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.products = payload.skip ? [...state.products, ...payload.products] : payload.products
        state.total = payload.total
        state.error = ''
      })
      .addCase(getProductsThunk.rejected, (state, { error }) => {
        state.isLoading = false
        state.error = error.message
      })
  },
})

export const productsReducer = productsSlice.reducer

export const { changeFilter, changePage } = productsSlice.actions
