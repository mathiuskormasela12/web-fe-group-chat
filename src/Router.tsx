// ========= Router
// import all oackages
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import all pages
import { Home } from './pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
