// ========= Root Reducer
// import all packages
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'

// import all reducers
import authReducer from './auth-slice/auth.slice'

const rootPersistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: []
}

const rootReducer = combineReducers({
  authReducer
})

export default persistReducer(rootPersistConfig, rootReducer)
