import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from './layouts/DefaultLayout.jsx'
import Homepage from './pages/Homepage.jsx'
import Menu from './pages/Menu.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App