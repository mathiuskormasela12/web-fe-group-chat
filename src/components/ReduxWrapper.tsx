// ========= Redux Wrapper
// import all packages
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// import redux store
import { store, persistor } from '../redux/store'

// import types
import { type IProps } from '../types'

export const ReduxWrapper: React.FC<IProps> = (props) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  )
}
