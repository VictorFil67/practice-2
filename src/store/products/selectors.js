import { createSelector } from '@reduxjs/toolkit'

const selectProducts = state => state.products.products
const selectFilter = state => state.products.filter
const selectIsLoading = state => state.products.isLoading
const selectError = state => state.products.error
const selectPage = state => state.products.page
const selectTotal = state => state.products.total

export const productsSelector = createSelector(
  selectProducts,
  selectFilter,
  (products, filterQuery) =>
    filterQuery
      ? products.filter(el => el.title.toLowerCase().includes(filterQuery.toLowerCase()))
      : products
)

export const productsDataSelector = createSelector(
  selectIsLoading,
  selectError,
  selectPage,
  selectTotal,
  (isLoading, error, page, total) => ({ isLoading, error, page, total })
)
