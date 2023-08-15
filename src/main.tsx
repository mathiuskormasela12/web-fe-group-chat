// ========== Main
// import all packages
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import Router from './Router'

// import tailwind css
import './style/tailwind.css'

// import all components
import { ReduxWrapper } from './components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <ReduxWrapper>
    <HelmetProvider>
      <Router />
    </HelmetProvider>
   </ReduxWrapper>
  </React.StrictMode>
)
