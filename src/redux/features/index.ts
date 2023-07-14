// ========== Root Reducer
// import all packages
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'

// import all redux slices
import tokenSlice from './tokenSlice'
import counterSlice from './counterSlice'

const rootPersistConfig = {
  key: 'root',
  version: 1,
  blacklist: ['counterSlice'],
  storage
}

const rootReducer = combineReducers({
  tokenSlice,
  counterSlice
})

export default persistReducer(rootPersistConfig, rootReducer)
