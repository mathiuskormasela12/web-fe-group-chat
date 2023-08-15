// ========== Router
// import all packages
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import all pages
import { CreateAccount, ChatRoom } from './pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatRoom />} />
        <Route path="/auth/create-account" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
