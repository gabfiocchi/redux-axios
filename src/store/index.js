import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

// Reducers from slices
import userReducer from './user.slice'
import { axiosMiddleware } from '../axiosSettings'

const rootReducer = combineReducers({
  user: userReducer,
})

const initializeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(axiosMiddleware)
    },
  })

export default initializeStore
