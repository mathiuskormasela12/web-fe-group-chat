// ========== Redux Wrapper
// import all packages
import React, { type PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../../redux/store'

export const ReduxWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
