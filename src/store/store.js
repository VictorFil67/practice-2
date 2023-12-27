import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoSlice'
import { userReduser } from './users/usersSlice'
import { productsReducer } from './products/productsSlice'
import { authReducer } from './auth/slice'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { rootReducer } from './root/slice'

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, authReducer)

const reducer = {
  todo: todoReducer,
  users: userReduser,
  products: productsReducer,
  auth: persistedReducer,
  root: rootReducer,
}

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
