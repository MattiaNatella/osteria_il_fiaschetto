import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from './layouts/DefaultLayout.jsx'
import Homepage from './pages/Homepage.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App