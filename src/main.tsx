import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.tsx'
import { ReduxWrapper } from './components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxWrapper>
      <Router />
    </ReduxWrapper>
  </React.StrictMode>
)
