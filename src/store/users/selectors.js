// export const selectUsers = state => {
//   return state.users.filterQuery
//     ? state.users.users.filter(el =>
//         el.username.toLowerCase().includes(state.users.filterQuery.toLowerCase())
//       )
//     : state.users.users

import { createSelector } from '@reduxjs/toolkit'

// }
export const selectLoading = state => state.users.isLoading
export const selectError = state => state.users.error

export const selectFilter = state => state.users.filterQuery
export const select_users = state => state.users.users

export const selectUsers = createSelector([select_users, selectFilter], (users, filter) => {
  return filter
    ? users.filter(el => el.username.toLowerCase().includes(filter.toLowerCase()))
    : users
})
