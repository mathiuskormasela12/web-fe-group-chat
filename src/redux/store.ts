// ======== Redux
// import all packages
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, PAUSE, PERSIST, PURGE, FLUSH, REHYDRATE, REGISTER } from 'redux-persist'
import rootReducer from './features'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PAUSE, PERSIST, PAUSE, PURGE, FLUSH, REGISTER, REHYDRATE]
      }
    })
  )
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
